
import { hashSync } from 'bcrypt';
import { categories, ingredients, products } from './constants';
import { prisma } from './prisma-client';

const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = (productId: number) => ({
    productId,
    price: randomNumber(250, 1000),
});

async function up() {
    // Пользователи
    await prisma.user.createMany({
        data: [
            {
                fullName: 'USER TEST',
                email: 'user@mail.ru',
                password: hashSync('11111', 10),
                role: 'USER',
                verify: new Date(),
            },
            {
                fullName: 'ADMIN TEST',
                email: 'admin@mail.ru',
                password: hashSync('22222', 10),
                role: 'ADMIN',
                verify: new Date(),
            },
        ],
    });

    // Категории: только кофе и чай
    await prisma.category.createMany({
        data: categories,
    });

    // Товары
    await prisma.product.createMany({
        data: products,
    });

    // Дополнительные опции для кофейных напитков,
    // если модель Ingredient используется в проекте
    await prisma.ingredient.createMany({
        data: ingredients,
    });

    // Варианты товаров
    await prisma.productVariation.createMany({
        data: products.map((product, index) =>
            generateProductItem(index + 1),
        ),
    });

    // Корзины пользователей
    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: '1111',
            },
            {
                userId: 2,
                totalAmount: 0,
                token: '2222',
            },
        ],
    });

    // Пример товара в корзине
    await prisma.cartItem.create({
        data: {
            cartId: 1,
            productItemId: 1,
            quanty: 2,
        },
    });
}

async function down() {
    await prisma.cartItem.deleteMany();
    await prisma.cart.deleteMany();
    await prisma.productVariation.deleteMany();
    await prisma.product.deleteMany();
    await prisma.ingredient.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();
}

async function main() {
    await up();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });


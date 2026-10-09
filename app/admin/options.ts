
import type { NextAdminOptions } from "@premieroctet/next-admin";

export const adminOptions: NextAdminOptions = {
  title: "Управление данными",

  model: {
    User: {
      title: "Пользователи",
      icon: "UsersIcon",
      toString: (user) => user.email ?? String(user.id),
      list: {
        search: ["email", "fullName"],
      },
    },

    Category: {
      title: "Категории",
      icon: "TagIcon",
      toString: (category) => category.name,
      list: {
        search: ["name"],
      },
    },

    Product: {
      title: "Товары",
      icon: "ShoppingBagIcon",
      toString: (product) => product.name,
      list: {
        search: ["name", "title", "description"],
      },
    },

    Cart: {
      title: "Корзины",
      icon: "ShoppingCartIcon",
      toString: (cart) => `Корзина #${cart.id}`,
      list: {
        search: ["token"],
      },
    },

    CartItem: {
      title: "Товары в корзинах",
      toString: (item) => `Позиция #${item.id}`,
    },

    Order: {
      title: "Заказы",
      toString: (order) => `Заказ #${order.id}`,
      list: {
        search: ["email", "fullName", "phone", "token"],
      },
    },
  },
};

export const ingredients = [
    {
        name: 'Овсяное молоко',
        price: 0.5,
        imageUrl: 'https://frogcoffee.de/media/image/1b/23/de/Molk_Kokosdrink_Barista_1_Liter_1052004517_297x297.png',
    },
    {
        name: 'Сироп ваниль',
        price: 0.5,
        imageUrl: 'https://frogcoffee.de/media/image/5c/84/54/Monin_Sirup_Vanille_Light_Sugar_Free_1_L_1045811958_297x297.png',
    },
    {
        name: 'Сироп карамель',
        price: 0.5,
        imageUrl: 'https://frogcoffee.de/media/image/bb/09/70/Monin_Sirup_Caramel_25L_1025709528_297x297.png',
    },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const categories = [
    { name: 'Кофе' },
    { name: 'Чай' },
];

export const products = [
    {
        name: 'Кофе в зёрнах',
        imageUrl: 'https://frogcoffee.de/media/image/dd/51/b5/Julius_Meinl_Vienna_Melange_1000g_ganze_Bohne_1039174418_297x297.png',
        categoryId: 1,
        title: '250 г',
        description:
            'Ароматный кофе в зёрнах для приготовления эспрессо и других кофейных напитков.',
    },
    {
        name: 'Кофе для эспрессо',
        imageUrl: 'https://frogcoffee.de/media/image/ef/d3/ca/illy_Espresso_Classico_ganze_Bohne_normale_Roestung_250g_1024493294_297x297.png',
        categoryId: 1,
        title: '250 г',
        description:
            'Насыщенный кофе для приготовления классического эспрессо.',
    },
    {
        name: 'Кофе средней обжарки',
        imageUrl: 'https://frogcoffee.de/media/image/00/96/bb/Lavazza_Qualita_Oro_1000g_ganze_Bohne_1025112179_297x297.png',
        categoryId: 1,
        title: '250 г',
        description:
            'Сбалансированный кофе с насыщенным ароматом и мягким вкусом.',
    },
    {
        name: 'Кофе тёмной обжарки',
        imageUrl: 'https://frogcoffee.de/media/image/75/fe/16/illy_Espresso_Intenso_ganze_Bohne_starke_Roestung_250g_1025487387_297x297.png',
        categoryId: 1,
        title: '250 г',
        description:
            'Интенсивный кофейный вкус для любителей крепкого кофе.',
    },
     {
        name: 'Кофе без кофеина',
        imageUrl: 'https://frogcoffee.de/media/image/21/1a/55/Lavazza_Decaf_500g_ganze_Bohne_1024027725_297x297.png',
        categoryId: 1,
        title: '250 г',
        description:
            'Мягкий кофе с тонкими нотками карамели и шоколада без содержания кофеина.',
    },
    {
        name: 'Органический кофе',
        imageUrl: 'https://frogcoffee.de/media/image/d6/f4/7d/HEIMBS_Mild_Feinster_Roestkaffee_250g_gemahlen_1034475194_297x297.png',
        categoryId: 1,
        title: '250 г',
        description:
            'Натуральный органический кофе из зёрен арабики, выращенных на экологически чистых плантациях.',
    },
    {
        name: 'Чёрный чай Earl Grey',
        imageUrl: 'https://frogcoffee.de/media/image/4f/df/88/Twinings_Earl_Grey_Tea_500g_loser_Tee_1031623443_297x297.png',
        categoryId: 2,
        title: '100 г',
        description:
            'Классический чёрный чай с ароматом бергамота.',
    },
    {
        name: 'Зелёный чай',
        imageUrl: 'https://frogcoffee.de/media/image/3f/d6/f0/Messmer_Cold_Tea_Sport_Mate_Lemon_mit_Koffein_14_Pyramidenbeutel_1047160403_297x297.png',
        categoryId: 2,
        title: '100 г',
        description:
            'Нежный зелёный чай с освежающим ароматом.',
    },
    {
        name: 'Фруктовый чай',
        imageUrl: 'https://frogcoffee.de/media/image/19/81/b3/Krueger_Teegetraenk_Pfirsich_400g_loeslich_1037979469_297x297.png',
        categoryId: 2,
        title: '100 г',
        description:
            'Ароматная фруктовая чайная смесь для уютных чаепитий.',
    },
    {
        name: 'Травяной чай',
        imageUrl: 'https://frogcoffee.de/media/image/d0/ca/a4/Windsor_Castle_Earl_Grey_s_Tea_1000g_loser_Tee_1040494694_297x297.png',
        categoryId: 2,
        title: '100 г',
        description:
            'Ароматный травяной настой с мягким вкусом.',
    },
    {
        name: 'Ройбуш',
        imageUrl: 'https://frogcoffee.de/media/image/57/7d/73/Buenting_Tee_Bio_Original_Ostfriesentee_200g_loser_1030178108_297x297.png',
        categoryId: 2,
        title: '100 г',
        description:
            'Мягкий напиток из ройбуша с естественным сладковатым вкусом.',
    },
    {
        name: 'Белый чай',
        imageUrl: 'https://frogcoffee.de/media/image/94/c9/8c/Buenting_Tee_Gruenpack_500g_loser_1027778486_297x297.png',
        categoryId: 2,
        title: '100 г',
        description:
            'Деликатный чай с лёгким ароматом и нежным вкусом.',
    },
];


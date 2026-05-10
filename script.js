const translations = {
    uz: {
        subtitle: "Eksklyuziv Ta'mlar Olami",
        searchPlaceholder: "Taom qidirish...",
        all: "Hammasi",
        food: "Ovqatlar",
        salad: "Salatlar",
        ingredientsLabel: "Tarkibi:",
        weightLabel: "vazni",
        noResults: "Hech narsa topilmadi",
        noResultsSub: "Boshqa so'z bilan qidirib ko'ring"
    },
    ru: {
        subtitle: "Мир эксклюзивных вкусов",
        searchPlaceholder: "Поиск блюд...",
        all: "Все",
        food: "Еда",
        salad: "Салаты",
        ingredientsLabel: "Состав:",
        weightLabel: "вес",
        noResults: "Ничего не найдено",
        noResultsSub: "Попробуйте другой запрос"
    },
    en: {
        subtitle: "World of Exclusive Flavors",
        searchPlaceholder: "Search food...",
        all: "All",
        food: "Food",
        salad: "Salads",
        ingredientsLabel: "Ingredients:",
        weightLabel: "weight",
        noResults: "Nothing found",
        noResultsSub: "Try a different search term"
    }
};

const menuData = [
    // --- SALADLAR ---
    {
        id: 1,
        title: { uz: "Grato salati", ru: "Салат Грато", en: "Grato Salad" },
        category: "salad",
        price: "35,000 so'm",
        weight: "260 gr",
        ingredients: {
            uz: "Lola Rossa, dudlangan indeyka, shampinyon, tuxum, salat bargi, pishloq, sous.",
            ru: "Лола Росса, копченая индейка, шампиньоны, яйцо, листья салата, сыр, соус.",
            en: "Lola Rossa, smoked turkey, champignons, egg, lettuce, cheese, sauce."
        },
        image: "photo salat/Grato.PNG"
    },
    {
        id: 2,
        title: { uz: "Vinegret", ru: "Винегрет", en: "Vinaigrette" },
        category: "salad",
        price: "20,000 so'm",
        weight: "300 gr",
        ingredients: {
            uz: "Kartoshka, sabzi, karam, lavlagi, yashil gorox, pista yog'i, tuz.",
            ru: "Картофель, морковь, капуста, свекла, зеленый горошек, подсолнечное масло, соль.",
            en: "Potato, carrot, cabbage, beetroot, green peas, vegetable oil, salt."
        },
        image: "photo salat/Vinegret.PNG"
    },
    {
        id: 3,
        title: { uz: "Seul", ru: "Сеул", en: "Seoul Salad" },
        category: "salad",
        price: "35,000 so'm",
        weight: "260 gr",
        ingredients: {
            uz: "Mol go'shti, bodring, bulg'or qalampiri, pomidor, maxsus sous.",
            ru: "Говядина, огурцы, болгарский перец, помидоры, специальный соус.",
            en: "Beef, cucumber, bell pepper, tomatoes, special sauce."
        },
        image: "photo salat/Seul.PNG"
    },
    {
        id: 4,
        title: { uz: "Svejiy salat", ru: "Свежий салат", en: "Fresh Salad" },
        category: "salad",
        price: "20,000 so'm",
        weight: "300 gr",
        ingredients: {
            uz: "Pomidor, bodring, piyoz, ko'katlar.",
            ru: "Помидоры, огурцы, лук, зелень.",
            en: "Tomatoes, cucumbers, onions, herbs."
        },
        image: "photo salat/Sveji.PNG"
    },
    {
        id: 5,
        title: { uz: "Qarsildoq Baqlajon", ru: "Хрустящие баклажаны", en: "Crispy Eggplant" },
        category: "salad",
        price: "45,000 so'm",
        weight: "300 gr",
        ingredients: {
            uz: "Baqlajon, pomidor, rukkola, motsarella, maxsus sous.",
            ru: "Баклажаны, помидоры, руккола, моцарелла, специальный соус.",
            en: "Eggplant, tomatoes, arugula, mozzarella, special sauce."
        },
        image: "photo salat/Qarsildoq Baqlajon.PNG"
    },
    {
        id: 6,
        title: { uz: "Bahor salati", ru: "Весенний салат", en: "Spring Salad" },
        category: "salad",
        price: "30,000 so'm",
        weight: "300 gr",
        ingredients: {
            uz: "koreys karami, shampinyon, rediska, bodring, miks salat, maxsus sous.",
            ru: "Корейская капуста, шампиньоны, редиска, огурцы, микс-салат, специальный соус.",
            en: "Korean cabbage, champignons, radish, cucumber, mix salad, special sauce."
        },
        image: "photo salat/Bahor salati.jpg"
    },
    {
        id: 7,
        title: { uz: "Bavarskiy salat", ru: "Баварский салат", en: "Bavarian Salad" },
        category: "salad",
        price: "30,000 so'm",
        weight: "260 gr",
        ingredients: {
            uz: "Tovuq filesi, pishloq, pomidor, qora nan, sarimsoq, maxsus sous.",
            ru: "Куриное филе, сыр, помидоры, черный хлеб, чеснок, специальный соус.",
            en: "Chicken fillet, cheese, tomatoes, black bread, garlic, special sauce."
        },
        image: "photo salat/Bavarskiy.PNG"
    },
    {
        id: 8,
        title: { uz: "Baqlajon Rulet", ru: "Рулетики из баклажанов", en: "Eggplant Rolls" },
        category: "salad",
        price: "40,000 so'm",
        weight: "300 gr",
        ingredients: {
            uz: "Baqlajon, mol go'shti, pomidor, sarimsoq, maxsus sous.",
            ru: "Баклажаны, говядина, помидоры, чеснок, специальный соус.",
            en: "Eggplant, beef, tomatoes, garlic, special sauce."
        },
        image: "photo salat/Baqlajon Rulet.PNG"
    },
    {
        id: 9,
        title: { uz: "Fransuz salati", ru: "Французский салат", en: "French Salad" },
        category: "salad",
        price: "30,000 so'm",
        weight: "260 gr",
        ingredients: {
            uz: "Mol go'shti, lavlagi, qizil sabzi, karam, kartoshka, mayonez.",
            ru: "Говядина, свекла, красная морковь, капуста, картофель, майонез.",
            en: "Beef, beetroot, red carrots, cabbage, potatoes, mayonnaise."
        },
        image: "photo salat/Fransuzki.PNG"
    },
    {
        id: 10,
        title: { uz: "Adana", ru: "Адана", en: "Adana Salad" },
        category: "salad",
        price: "40,000 so'm",
        weight: "300 gr",
        ingredients: {
            uz: "Baqlajon, tovuq filesi, aysberg karami, rukkola, lola rossa, pomidor, kartoshka, ko'katlar, maxsus sous.",
            ru: "Баклажаны, куриное филе, капуста айсберг, руккола, лола росса, помидоры, картофель, зелень, специальный соус.",
            en: "Eggplant, chicken fillet, iceberg lettuce, arugula, lola rossa, tomatoes, potatoes, herbs, special sauce."
        },
        image: "photo salat/Adana.PNG"
    },
    {
        id: 11,
        title: { uz: "Mujskoy Kapriz", ru: "Мужской каприз", en: "Men's Caprice" },
        category: "salad",
        price: "40,000 so'm",
        weight: "260 gr",
        ingredients: {
            uz: "Qazi, indeyka go'shti, mol go'shti ruleti, marinadlangan bodring, gorox, sous.",
            ru: "Казы, индейка, рулет из говядины, маринованные огурцы, горошек, соус.",
            en: "Qazi, turkey, beef roll, pickled cucumbers, peas, sauce."
        },
        image: "photo salat/Mujskoy kapriz.jpg"
    },

    // --- OVQATLAR (ISSIG' TAOMLAR) ---
    {
        id: 12,
        title: { uz: "Frikadelki sho'rva", ru: "Суп с фрикадельками", en: "Meatball Soup" },
        category: "food",
        price: "25,000 so'm",
        weight: "300 gr",
        ingredients: { uz: "Mol go'shtidan frikadelkalar, sabzavotlar, ziravorlar.", ru: "Фрикадельки из говядины, овощи, специи.", en: "Beef meatballs, vegetables, spices." },
        image: "photo ovqat/Frikadelki sho'rva.PNG"
    },
    {
        id: 13,
        title: { uz: "Tushonka sho'rva", ru: "Суп с тушенкой", en: "Stew Soup" },
        category: "food",
        price: "40,000 so'm",
        weight: "300 gr",
        ingredients: { uz: "Dimlangan go'sht (tushonka), kartoshka, sabzavotlar.", ru: "Тушеное мясо, картофель, овощи.", en: "Stewed meat, potatoes, vegetables." },
        image: "photo ovqat/Tushonka sho'rva.PNG"
    },
    {
        id: 14,
        title: { uz: "Asorti Golubsi", ru: "Ассорти голубцы", en: "Assorted Stuffed Cabbage" },
        category: "food",
        price: "35,000 so'm",
        weight: "350 gr",
        ingredients: { uz: "1 ta Bulg'or, karam 2ta, do'lma 2ta.", ru: "1 Болгарский перец, 2 голубца, 2 долмы.", en: "1 Bell pepper, 2 stuffed cabbage, 2 dolma." },
        image: "photo ovqat/Asorti Golubsi.PNG"
    },
    {
        id: 15,
        title: { uz: "Solyanka", ru: "Солянка", en: "Solyanka Soup" },
        category: "food",
        price: "30,000 so'm",
        weight: "300 gr",
        ingredients: { uz: "Har xil turdagi dudlangan go'shtlar, zaytun, limon, maxsus bulyon.", ru: "Разные виды копченого мяса, оливки, лимон, специальный бульон.", en: "Various smoked meats, olives, lemon, special broth." },
        image: "photo ovqat/Solyanka.PNG"
    },
    {
        id: 16,
        title: { uz: "Uyg'ur lag'mon", ru: "Уйгурский лагман", en: "Uyghur Lagman" },
        category: "food",
        price: "35,000 so'm",
        weight: "350 gr",
        ingredients: { uz: "Qo'lda cho'zilgan xamir, mol go'shti, sabzavotlar va qayla.", ru: "Тянутая вручную лапша, говядина, овощи и подлива.", en: "Hand-pulled noodles, beef, vegetables, and gravy." },
        image: "photo ovqat/Uyg'ur lag'mon.PNG"
    },
    {
        id: 17,
        title: { uz: "Qovurma lag'mon", ru: "Ковурма лагман", en: "Fried Lagman" },
        category: "food",
        price: "30,000 so'm",
        weight: "300 gr",
        ingredients: { uz: "Qovurilgan lag'mon xamiri, go'sht, tuxum va sabzavotlar.", ru: "Жареная лапша, мясо, яйцо и овощи.", en: "Fried noodles, meat, egg, and vegetables." },
        image: "photo ovqat/Qovurma lag'mon.PNG"
    },
    {
        id: 18,
        title: { uz: "Amlet", ru: "Омлет", en: "Omelet" },
        category: "food",
        price: "25,000 so'm",
        weight: "200 gr",
        ingredients: { uz: "Tuxum, sut, pishloq (tanlovga ko'ra).", ru: "Яйца, молоко, сыр (по желанию).", en: "Eggs, milk, cheese (optional)." },
        image: "photo ovqat/Amlet.PNG"
    },
    {
        id: 19,
        title: { uz: "Go'shtli kotlet", ru: "Мясная котлета", en: "Meat Cutlet" },
        category: "food",
        price: "15,000 so'm",
        weight: "100 gr",
        ingredients: { uz: "Mol go'shtidan tayyorlangan kotlet, garnir bilan.", ru: "Котлета из говядины, с гарниром.", en: "Beef cutlet, served with garnish." },
        image: "photo ovqat/Go'shtli kotlet.PNG"
    },
    {
        id: 20,
        title: { uz: "Tovuqli Kotlet", ru: "Куриная котлета", en: "Chicken Cutlet" },
        category: "food",
        price: "15,000 so'm",
        weight: "100 gr",
        ingredients: { uz: "Tovuq go'shtidan mayin kotlet.", ru: "Нежная куриная котлета.", en: "Tender chicken cutlet." },
        image: "photo ovqat/Tovuqli Kotlet.PNG"
    },
    {
        id: 21,
        title: { uz: "Go'sht+pomidor+sir li kotlet", ru: "Котлета Мясо+Помидор+Сыр", en: "Meat+Tomato+Cheese Cutlet" },
        category: "food",
        price: "18,000 so'm",
        weight: "130 gr",
        ingredients: { uz: "Mol go'shti, pomidor va erigan pishloq uyg'unligi.", ru: "Сочетание говядины, помидора и плавленого сыра.", en: "Combination of beef, tomato, and melted cheese." },
        image: "photo ovqat/Go'sht+pomidor+sir li kotlet.PNG"
    },
    {
        id: 22,
        title: { uz: "Go'shtli chuchvara", ru: "Чучвара с мясом", en: "Meat Dumplings" },
        category: "food",
        price: "25,000 so'm",
        weight: "300 gr",
        ingredients: { uz: "Mayda tugilgan chuchvaralar, mol go'shti bilan.", ru: "Маленькие пельмени с говядиной.", en: "Small meat dumplings with beef." },
        image: "photo ovqat/Go'shtli chuchvara.PNG"
    },
    {
        id: 23,
        title: { uz: "Ismaloqli chuchvara", ru: "Чучвара со шпинатом", en: "Spinach Dumplings" },
        category: "food",
        price: "20,000 so'm",
        weight: "300 gr",
        ingredients: { uz: "Yangi ismaloq bilan to'ldirilgan chuchvaralar.", ru: "Пельмени с начинкой из свежего шпината.", en: "Dumplings filled with fresh spinach." },
        image: "photo ovqat/Ismaloqli chuchvara.PNG"
    },
    {
        id: 24,
        title: { uz: "Grato Burger", ru: "Бургер Грато", en: "Grato Burger" },
        category: "food",
        price: "30,000 so'm",
        weight: "200 gr",
        ingredients: { uz: "Maxsus bulochka, shirali kotlet, pishloq va yangi sabzavotlar.", ru: "Фирменная булочка, сочная котлета, сыр и свежие овощи.", en: "Signature bun, juicy patty, cheese, and fresh vegetables." },
        image: "photo ovqat/Grato Burger.jpg"
    },
    {
        id: 25,
        title: { uz: "Go'shtli say", ru: "Сай с мясом", en: "Meat Stir-fry" },
        category: "food",
        price: "45,000 so'm",
        weight: "250 gr",
        ingredients: { uz: "Mol go'shti va sabzavotlarning qovurilgan uyg'unligi.", ru: "Жареное сочетание говядины и овощей.", en: "Stir-fried combination of beef and vegetables." },
        image: "photo ovqat/Go'shtli say.PNG"
    },
    {
        id: 26,
        title: { uz: "Tovuqli Say", ru: "Сай с курицей", en: "Chicken Stir-fry" },
        category: "food",
        price: "40,000 so'm",
        weight: "250 gr",
        ingredients: { uz: "Tovuq go'shti va sabzavotli qovurma.", ru: "Жареная курица с овощами.", en: "Stir-fried chicken with vegetables." },
        image: "photo ovqat/Tovuqli Say.PNG"
    },
    {
        id: 27,
        title: { uz: "Grato Jiz(Sabzavotli)", ru: "Грато Джиз (овощной)", en: "Grato Jiz (Veg)" },
        category: "food",
        price: "65,000 so'm",
        weight: "500 gr",
        ingredients: { uz: "Mol go'shti va ko'plab yangi sabzavotlar bilan pishirilgan jiz.", ru: "Джиз из говядины с обилием свежих овощей.", en: "Beef Jiz cooked with plenty of fresh vegetables." },
        image: "photo ovqat/Grato Jiz(Sabzavotli).jpg"
    },
    {
        id: 28,
        title: { uz: "Grato Jiz Tovuq(Sabzavotli)", ru: "Грато Джиз с курицей", en: "Grato Chicken Jiz" },
        category: "food",
        price: "40,000 so'm",
        weight: "500 gr",
        ingredients: { uz: "Tovuq go'shti va sabzavotlar uyg'unligi.", ru: "Сочетание куриного мяса и овощей.", en: "Combination of chicken and vegetables." },
        image: "photo ovqat/Grato Jiz Tovuq(Sabzavotli).jpg"
    },
    {
        id: 29,
        title: { uz: "Grato nonushtasi", ru: "Завтрак Грато", en: "Grato Breakfast" },
        category: "food",
        price: "35,000 so'm",
        weight: "300 gr",
        ingredients: { uz: "Tuxum, kolbasa, pishloq va boshqa nonushta mahsulotlari.", ru: "Яйца, колбаса, сыр и другие продукты для завтрака.", en: "Eggs, sausages, cheese, and other breakfast items." },
        image: "photo ovqat/Grato nonushtasi.PNG"
    },
    {
        id: 30,
        title: { uz: "Jigar Vag'uri", ru: "Печень Вагури", en: "Liver Vaguri" },
        category: "food",
        price: "60,000 so'm",
        weight: "500 gr",
        ingredients: { uz: "Maxsus usulda pishirilgan jigar taomi.", ru: "Блюдо из печени, приготовленное особым способом.", en: "Liver dish prepared in a special way." },
        image: "photo ovqat/Jigar Vag'uri.jpg"
    },
    {
        id: 31,
        title: { uz: "KFS", ru: "КФС (Курица)", en: "KFC Style Chicken" },
        category: "food",
        price: "40,000 so'm",
        weight: "0.5 kg",
        ingredients: { uz: "Qarsildoq tovuq go'shti, maxsus panerovkada.", ru: "Хрустящая курица в специальной панировке.", en: "Crispy chicken in special breading." },
        image: "photo ovqat/KFS.PNG"
    },
    {
        id: 32,
        title: { uz: "Manti", ru: "Манты", en: "Manti Dumplings" },
        category: "food",
        price: "6,000 so'm",
        weight: "1 ta",
        ingredients: { uz: "Mol go'shti va piyoz bilan to'ldirilgan xamir taomi.", ru: "Блюдо из теста с начинкой из говядины и лука.", en: "Dough dish filled with beef and onions." },
        image: "photo ovqat/Manti.PNG"
    },
    {
        id: 33,
        title: { uz: "Podjarka", ru: "Поджарка", en: "Podjarka Stir-fry" },
        category: "food",
        price: "40,000 so'm",
        weight: "450 gr",
        ingredients: { uz: "Go'sht va sabzavotlarning qovurilgan to'plami.", ru: "Жареный набор мяса и овощей.", en: "Stir-fried assortment of meat and vegetables." },
        image: "photo ovqat/Podjarka.JPG"
    },
    {
        id: 34,
        title: { uz: "Qurutob", ru: "Курутоб", en: "Qurutob" },
        category: "food",
        price: "70,000 so'm",
        weight: "400 gr",
        ingredients: { uz: "An'anaviy tojik taomi, qurut va non bilan.", ru: "Традиционное таджикское блюдо с курутом и хлебом.", en: "Traditional Tajik dish with qurut and bread." },
        image: "photo ovqat/Qurutob.jpg"
    },
    {
        id: 35,
        title: { uz: "Sabzavotli Jigar", ru: "Печень с овощами", en: "Liver with Veg" },
        category: "food",
        price: "120,000 so'm",
        weight: "500 gr",
        ingredients: { uz: "Jigar va turli xil sabzavotlar.", ru: "Печень и различные овощи.", en: "Liver and various vegetables." },
        image: "photo ovqat/Sabzavotli Jigar.jpg"
    },
    {
        id: 36,
        title: { uz: "Sixcha Kabob", ru: "Шашлык в палочках", en: "Skewer Kebab" },
        category: "food",
        price: "65,000 so'm",
        weight: "400 gr",
        ingredients: { uz: "Mayda to'g'ralgan go'shtdan tayyorlangan kabob.", ru: "Шашлык из мелко нарезанного мяса.", en: "Kebab made from finely chopped meat." },
        image: "photo ovqat/Sixcha Kabob.jpg"
    },
    {
        id: 37,
        title: { uz: "Teriyaki go'shtli", ru: "Терияки с мясом", en: "Beef Teriyaki" },
        category: "food",
        price: "45,000 so'm",
        weight: "500 gr",
        ingredients: { uz: "Mol go'shti, teriyaki sousi va sabzavotlar.", ru: "Говядина, соус терияки и овощи.", en: "Beef, teriyaki sauce, and vegetables." },
        image: "photo ovqat/Teriyaki go'shtli.PNG"
    },
    {
        id: 38,
        title: { uz: "Teriyaki Tovuqli", ru: "Терияки с курицей", en: "Chicken Teriyaki" },
        category: "food",
        price: "40,000 so'm",
        weight: "500 gr",
        ingredients: { uz: "Tovuq go'shti va teriyaki sousi.", ru: "Курица и соус терияки.", en: "Chicken and teriyaki sauce." },
        image: "photo ovqat/Teriyaki Tovuqli.PNG"
    },
    {
        id: 39,
        title: { uz: "Tovuqli Rulet", ru: "Куриный рулет", en: "Chicken Roll" },
        category: "food",
        price: "25,000 so'm",
        weight: "250 gr",
        ingredients: { uz: "Tovuq go'shtidan pishirilgan rulet.", ru: "Запеченный куриный рулет.", en: "Baked chicken roll." },
        image: "photo ovqat/Tovuqli Rulet.PNG"
    },
    {
        id: 40,
        title: { uz: "Turkcha Sarma Beyti", ru: "Турецкая Сарма Бейти", en: "Turkish Sarma Beyti" },
        category: "food",
        price: "25,000 so'm",
        weight: "400 gr",
        ingredients: { uz: "Turkcha usulda tayyorlangan go'shtli taom.", ru: "Мясное блюдо, приготовленное по-турецки.", en: "Meat dish prepared in Turkish style." },
        image: "photo ovqat/Turkcha Sarma Beyti.PNG"
    }
];

let currentLang = 'uz';
const menuContainer = document.getElementById('menu-container');
const categoryButtons = document.querySelectorAll('.cat-btn');
const searchInput = document.getElementById('search-input');
const modal = document.getElementById('item-modal');
const closeModal = document.getElementById('close-modal');
const langButtons = document.querySelectorAll('.lang-btn');

function updateUIText() {
    const subtitle = document.getElementById('ui-subtitle');
    if (subtitle) subtitle.innerText = translations[currentLang].subtitle;
    if (searchInput) searchInput.placeholder = translations[currentLang].searchPlaceholder;
    const ingredientsLabel = document.getElementById('ui-ingredients-label');
    if (ingredientsLabel) ingredientsLabel.innerText = translations[currentLang].ingredientsLabel;

    categoryButtons.forEach(btn => {
        const cat = btn.dataset.category;
        if (cat === 'all') {
            btn.innerText = `${translations[currentLang][cat]} (${menuData.length})`;
        } else if (translations[currentLang][cat]) {
            const count = menuData.filter(i => i.category === cat).length;
            btn.innerText = `${translations[currentLang][cat]} (${count})`;
        }
    });
}

function displayMenuItems(items) {
    if (!menuContainer) return;
    if (items.length === 0) {
        menuContainer.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <p class="no-results-title">${translations[currentLang].noResults}</p>
                <p class="no-results-sub">${translations[currentLang].noResultsSub}</p>
            </div>
        `;
        return;
    }

    menuContainer.innerHTML = items.map(item => `
        <div class="menu-card" onclick="openItemDetails(${item.id})">
            <div class="card-img-wrapper">
                <img src="${item.image}" alt="${item.title[currentLang]}" class="card-img" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=Rasm+Mavjud+Emas'">
            </div>
            <div class="card-content">
                <div class="card-header">
                    <h3>${item.title[currentLang]}</h3>
                    <span class="price">${item.price}</span>
                </div>
                <p class="ingredients">${item.ingredients[currentLang]}</p>
                <div class="card-footer">
                    <span class="weight">${item.weight}</span>
                    <i class="fas fa-arrow-right" style="color: var(--luxury-gold)"></i>
                </div>
            </div>
        </div>
    `).join('');
}

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        langButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLang = btn.dataset.lang;
        updateUIText();
        displayMenuItems(menuData);
    });
});

categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.dataset.category;
        const filteredItems = category === 'all' ? menuData : menuData.filter(i => i.category === category);
        displayMenuItems(filteredItems);
    });
});

// Debounce funksiyasi
let searchTimer = null;
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
        const val = e.target.value.toLowerCase();
        const filtered = menuData.filter(i => 
            i.title[currentLang].toLowerCase().includes(val) || 
            i.ingredients[currentLang].toLowerCase().includes(val)
        );
        displayMenuItems(filtered);
    }, 300);
});

function openItemDetails(id) {
    const item = menuData.find(i => i.id === id);
    if (!item) return;
    document.getElementById('modal-img').src = item.image;
    document.getElementById('modal-title').innerText = item.title[currentLang];
    document.getElementById('modal-price').innerText = item.price;
    document.getElementById('modal-weight').innerText = item.weight;
    document.getElementById('modal-ingredients').innerText = item.ingredients[currentLang];
    modal.style.display = 'flex';
}

if (closeModal) {
    closeModal.addEventListener('click', () => modal.style.display = 'none');
}

window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

// Swipe down — modalni yopish (Native app kabi)
(function() {
    const modalContent = document.querySelector('.modal-content');
    if (!modalContent) return;

    let startY = 0;
    let currentY = 0;
    let isDragging = false;

    modalContent.addEventListener('touchstart', (e) => {
        // Faqat tepada bo'lsa swipe ishlaydi (scroll 0 da)
        if (modalContent.scrollTop > 5) return;
        startY = e.touches[0].clientY;
        isDragging = true;
        modalContent.style.transition = 'none';
    }, { passive: true });

    modalContent.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentY = e.touches[0].clientY;
        const diff = currentY - startY;

        // Faqat pastga surish
        if (diff > 0) {
            modalContent.style.transform = `translateY(${diff}px)`;
            // Shaffoflikni kamaytirish
            const opacity = Math.max(0.3, 1 - diff / 400);
            modalContent.style.opacity = opacity;
        }
    }, { passive: true });

    modalContent.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        const diff = currentY - startY;

        modalContent.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

        if (diff > 80) {
            // Yetarlicha pastga surildi — yopamiz
            modalContent.style.transform = 'translateY(100%)';
            modalContent.style.opacity = '0';
            setTimeout(() => {
                modal.style.display = 'none';
                modalContent.style.transform = '';
                modalContent.style.opacity = '';
            }, 300);
        } else {
            // Qaytaramiz
            modalContent.style.transform = '';
            modalContent.style.opacity = '';
        }

        startY = 0;
        currentY = 0;
    });
})();

document.addEventListener('DOMContentLoaded', () => {
    updateUIText();
    displayMenuItems(menuData);

    // Sariq zarrachalar generatori
    createParticles();
});

function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const particleCount = 20;

    // Rang variatsiyalari — olov uchqunlari
    const colors = [
        'rgba(220, 180, 80, 0.9)',   // Yorqin oltin
        'rgba(197, 160, 89, 0.7)',   // Iliq amber
        'rgba(240, 200, 100, 0.8)',  // Ochiq oltin
        'rgba(180, 140, 60, 0.6)',   // Chuqur amber
        'rgba(255, 220, 120, 0.9)',  // Yorqin sariq
    ];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // 3 xil o'lcham — kichik, o'rta, katta
        const sizeType = Math.random();
        let size, glowSize;
        if (sizeType < 0.5) {
            size = Math.random() * 1.5 + 1;   // 1-2.5px kichik uchqun
            glowSize = 4;
        } else if (sizeType < 0.85) {
            size = Math.random() * 1.5 + 2.5; // 2.5-4px o'rta uchqun
            glowSize = 8;
        } else {
            size = Math.random() * 2 + 4;     // 4-6px katta yulduz
            glowSize = 14;
        }

        const left = Math.random() * 100;
        const riseDuration = Math.random() * 7 + 8;     // 8-15s ko'tarilish
        const twinkleDuration = Math.random() * 1 + 1;  // 1-2s miltillash
        const delay = Math.random() * 12;
        const color = colors[Math.floor(Math.random() * colors.length)];

        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = left + '%';
        particle.style.background = color;
        particle.style.boxShadow = `0 0 ${glowSize}px ${color}, 0 0 ${glowSize * 2}px rgba(197, 160, 89, 0.15)`;
        particle.style.animationDuration = `${riseDuration}s, ${twinkleDuration}s`;
        particle.style.animationDelay = `${delay}s, ${delay}s`;

        container.appendChild(particle);
    }
}

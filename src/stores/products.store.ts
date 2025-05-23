import { defineStore } from 'pinia'
import { useCategoriesStore } from '@/stores/categories.store.ts'
import { ref } from 'vue'

export interface Product {
    id: number
    name: string
    categoryId: number
    categoryName: string
}

export interface ProductComment {
    productId: number
    id: number
    message: string
    userName: string
}

export const useProductsStore = defineStore('products', () => {
    const categoryStore = useCategoriesStore()

    let products = [
        { id: 1, name: 'Куряче філе', categoryId: 1, categoryName: '' },
        { id: 2, name: 'Свинячі ребра', categoryId: 1, categoryName: '' },
        { id: 3, name: 'Яловичий стейк', categoryId: 1, categoryName: '' },
        { id: 4, name: 'Морозиво з лосося', categoryId: 1, categoryName: '' },
        {
            id: 5,
            name: 'Креветки варено-морожені',
            categoryId: 1,
            categoryName: '',
        },

        {
            id: 6,
            name: 'Молоко пастеризоване (2,5%)',
            categoryId: 2,
            categoryName: '',
        },
        { id: 7, name: 'Сметана 20%', categoryId: 2, categoryName: '' },
        { id: 1, name: 'Твердий сир «Гауда»', categoryId: 2, categoryName: '' },
        {
            id: 8,
            name: 'Масло вершкове 82,5%',
            categoryId: 2,
            categoryName: '',
        },
        {
            id: 9,
            name: 'Йогурт натуральний без добавок',
            categoryId: 2,
            categoryName: '',
        },

        {
            id: 10,
            name: 'Яблука сорту «Голден»',
            categoryId: 3,
            categoryName: '',
        },
        {
            id: 11,
            name: 'Капуста білокачанна',
            categoryId: 3,
            categoryName: '',
        },
        { id: 12, name: 'Огірки свіжі', categoryId: 3, categoryName: '' },
        {
            id: 13,
            name: 'Полуниця (в сезонному контейнері)',
            categoryId: 3,
            categoryName: '',
        },
        {
            id: 14,
            name: 'Морква митий фасований',
            categoryId: 3,
            categoryName: '',
        },

        {
            id: 15,
            name: 'Вареники з картоплею (заморожені)',
            categoryId: 4,
            categoryName: '',
        },
        {
            id: 16,
            name: 'Заморожена піца «Маргарита»',
            categoryId: 4,
            categoryName: '',
        },
        { id: 17, name: 'Пельмені класичні', categoryId: 4, categoryName: '' },
        {
            id: 18,
            name: 'Заморожене листкове тісто',
            categoryId: 4,
            categoryName: '',
        },
        {
            id: 19,
            name: 'Міні-чізкейк з заморозки',
            categoryId: 4,
            categoryName: '',
        },
        {
            id: 20,
            name: 'Яйця курячі столові',
            categoryId: 5,
            categoryName: '',
        },
        {
            id: 21,
            name: 'Ковбаса сирокопчена «Салямі»',
            categoryId: 5,
            categoryName: '',
        },
        {
            id: 22,
            name: 'Торт «Наполеон» з вершковим кремом',
            categoryId: 5,
            categoryName: '',
        },
        {
            id: 23,
            name: 'Дитяче пюре (яблуко-банан)',
            categoryId: 5,
            categoryName: '',
        },
        {
            id: 24,
            name: 'Дієтичне желе без цукру',
            categoryId: 5,
            categoryName: '',
        },
    ] as Product[]

    products = products.map((product) => {
        const category = categoryStore.categories.find(
            (category) => category.id === product.categoryId
        )

        return {
            ...product,
            categoryName: category?.name ?? '',
        } as Product
    })

    const comments = ref<ProductComment[]>([
        {
            productId: 1,
            id: 1,
            message: 'Упаковка неушкоджена, товар зберігається в нормі.',
            userName: 'Олена Іваненко',
        },
        {
            productId: 1,
            id: 2,
            message:
                'Температура в камері стабільна, партія придатна до відвантаження.',
            userName: 'Михайло Савчук',
        },
        {
            productId: 2,
            id: 3,
            message:
                'Було виявлено незначне запотівання пакування — перевірено вручну.',
            userName: 'Ігор Лисенко',
        },
        {
            productId: 2,
            id: 4,
            message:
                'Рекомендую реалізувати партію раніше через близький термін придатності.',
            userName: 'Оксана Білик',
        },
        {
            productId: 3,
            id: 5,
            message: 'Стейк відповідає заявленим стандартам, вага в нормі.',
            userName: 'Артем Павлюк',
        },
        {
            productId: 3,
            id: 6,
            message: 'Оформлено акт прийому, усе гаразд.',
            userName: 'Світлана Гончар',
        },
        {
            productId: 4,
            id: 7,
            message:
                'Пакування вакуумне — без дефектів, зберігається при -18°C.',
            userName: 'Денис Коваленко',
        },
        {
            productId: 4,
            id: 8,
            message:
                'Товар зберігався у віддаленій камері, перенесено до основної.',
            userName: 'Людмила Харченко',
        },
        {
            productId: 5,
            id: 9,
            message: 'Креветки розфасовані та марковані згідно вимог.',
            userName: 'Руслан Вернигора',
        },
        {
            productId: 5,
            id: 10,
            message:
                'Вологість у зоні перевищена на 5%, ситуація під контролем.',
            userName: 'Ірина Шевчук',
        },
        {
            productId: 6,
            id: 11,
            message:
                'Молоко доставлено свіжим, температура під час приймання: +4°C.',
            userName: 'Катерина Романюк',
        },
        {
            productId: 6,
            id: 12,
            message: 'Частина упаковок має незначні вм’ятини — не критично.',
            userName: 'Володимир Литвин',
        },
        {
            productId: 7,
            id: 13,
            message:
                'Сметана зберігається в зоні C, партія повністю маркована.',
            userName: 'Тетяна Черненко',
        },
        {
            productId: 7,
            id: 14,
            message:
                'Дегустаційна перевірка — нормальний смак та консистенція.',
            userName: 'Андрій Матвієнко',
        },
        {
            productId: 8,
            id: 15,
            message: 'Сир зберігається в холодильнику при +5°C, запашний.',
            userName: 'Наталія Федоренко',
        },
        {
            productId: 8,
            id: 16,
            message: 'Візуально без пошкоджень, етикетки читаються чітко.',
            userName: 'Олексій Гордієнко',
        },
        {
            productId: 9,
            id: 17,
            message:
                'Масло щільно упаковане, з дотриманням температурного режиму.',
            userName: 'Ірина Данилюк',
        },
        {
            productId: 9,
            id: 18,
            message: 'Відсутність конденсату на поверхні підтверджена.',
            userName: 'Роман Безуглий',
        },
        {
            productId: 10,
            id: 19,
            message: 'Йогурт свіжий, партія перевірена перед відправкою.',
            userName: 'Людмила Савицька',
        },
        {
            productId: 10,
            id: 20,
            message: 'Одна упаковка з тріщиною — вилучено зі зберігання.',
            userName: 'Богдан Чабан',
        },
        {
            productId: 11,
            id: 21,
            message: 'Яблука збережені в охолодженій зоні при +4°C.',
            userName: 'Дарина Коваль',
        },
        {
            productId: 11,
            id: 22,
            message: 'Зовнішній вигляд без нарікань, урожай свіжий.',
            userName: 'Микола Андрущенко',
        },
        {
            productId: 12,
            id: 23,
            message:
                'Капуста розміщена на нижніх полицях — стабільна вологість.',
            userName: 'Іванна Сахно',
        },
        {
            productId: 12,
            id: 24,
            message: 'Виявлена одна головка з м’якими плямами — вилучено.',
            userName: 'Олександр Панько',
        },
        {
            productId: 13,
            id: 25,
            message:
                'Огірки пройшли огляд — без пошкоджень, збережені охолодженими.',
            userName: 'Олена Тищенко',
        },
        {
            productId: 13,
            id: 26,
            message: 'У вологій камері показник стабільний — 88%.',
            userName: 'Віктор Жук',
        },
        {
            productId: 14,
            id: 27,
            message: 'Полуниця замовлена свіжою, але потребує перегляду щодня.',
            userName: 'Марія Левченко',
        },
        {
            productId: 14,
            id: 28,
            message: 'Умови зберігання дотримано, частина вже реалізована.',
            userName: 'Сергій Білаш',
        },
        {
            productId: 15,
            id: 29,
            message: 'Морква зберігається у тарі, пересорт відсутній.',
            userName: 'Алла Шинкарук',
        },
        {
            productId: 15,
            id: 30,
            message: 'Регулярно зволожується повітря в зоні зберігання.',
            userName: 'Євген Крук',
        },
        {
            productId: 16,
            id: 31,
            message: 'Вареники щільно упаковані, партія ще в резерві.',
            userName: 'Артем Броваренко',
        },
        {
            productId: 16,
            id: 32,
            message: 'Температура у морозильній камері стабільна: -18°C.',
            userName: 'Валерія Гладка',
        },
        {
            productId: 17,
            id: 33,
            message:
                'Піца зберігається в глибинному замороженні, перевірено перед видачею.',
            userName: 'Оксана Мельник',
        },
        {
            productId: 17,
            id: 34,
            message: 'Партія має коректну маркування і дату фасування.',
            userName: 'Тимур Дорошенко',
        },
    ] as ProductComment[])

    return {
        products,
        comments,
    }
})

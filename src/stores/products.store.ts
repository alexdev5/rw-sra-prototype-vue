import { defineStore } from 'pinia'
import { useCategoriesStore } from '@/stores/categories.store.ts'

export interface Product {
    name: string
    categoryId: number
    categoryName: string
}

export const useProductsStore = defineStore('products', () => {
    const categoryStore = useCategoriesStore()

    let products = [
        { name: 'Куряче філе', categoryId: 1, categoryName: '' },
        { name: 'Свинячі ребра', categoryId: 1, categoryName: '' },
        { name: 'Яловичий стейк', categoryId: 1, categoryName: '' },
        { name: 'Морозиво з лосося', categoryId: 1, categoryName: '' },
        { name: 'Креветки варено-морожені', categoryId: 1, categoryName: '' },

        {
            name: 'Молоко пастеризоване (2,5%)',
            categoryId: 2,
            categoryName: '',
        },
        { name: 'Сметана 20%', categoryId: 2, categoryName: '' },
        { name: 'Твердий сир «Гауда»', categoryId: 2, categoryName: '' },
        { name: 'Масло вершкове 82,5%', categoryId: 2, categoryName: '' },
        {
            name: 'Йогурт натуральний без добавок',
            categoryId: 2,
            categoryName: '',
        },

        { name: 'Яблука сорту «Голден»', categoryId: 3, categoryName: '' },
        { name: 'Капуста білокачанна', categoryId: 3, categoryName: '' },
        { name: 'Огірки свіжі', categoryId: 3, categoryName: '' },
        {
            name: 'Полуниця (в сезонному контейнері)',
            categoryId: 3,
            categoryName: '',
        },
        { name: 'Морква митий фасований', categoryId: 3, categoryName: '' },

        {
            name: 'Вареники з картоплею (заморожені)',
            categoryId: 4,
            categoryName: '',
        },
        {
            name: 'Заморожена піца «Маргарита»',
            categoryId: 4,
            categoryName: '',
        },
        { name: 'Пельмені класичні', categoryId: 4, categoryName: '' },
        { name: 'Заморожене листкове тісто', categoryId: 4, categoryName: '' },
        { name: 'Міні-чізкейк з заморозки', categoryId: 4, categoryName: '' },
        [
            { name: 'Яйця курячі столові', categoryId: 5, categoryName: '' },
            {
                name: 'Ковбаса сирокопчена «Салямі»',
                categoryId: 5,
                categoryName: '',
            },
            {
                name: 'Торт «Наполеон» з вершковим кремом',
                categoryId: 5,
                categoryName: '',
            },
            {
                name: 'Дитяче пюре (яблуко-банан)',
                categoryId: 5,
                categoryName: '',
            },
            {
                name: 'Дієтичне желе без цукру',
                categoryId: 5,
                categoryName: '',
            },
        ],
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
    return {
        products,
    }
})

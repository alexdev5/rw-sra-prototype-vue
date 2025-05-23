import { defineStore } from 'pinia'
import { useCategoriesStore } from '@/stores/categories.store.ts'

export interface Product {
    id: number
    name: string
    categoryId: number
    categoryName: string
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
    return {
        products,
    }
})

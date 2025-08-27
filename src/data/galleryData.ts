export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    span?: 'col' | 'row';
}

export const galleryImages: GalleryImage[] = [
    { id: 1, src: '/images/gallery-food-1.jpeg', alt: 'A beautifully plated gourmet dish'},
    { id: 2, src: '/images/gallery-interior-1.jpeg', alt: 'The elegant and warm interior of the restaurant'},
    { id: 3, src: '/images/gallery-chef-1.jpeg', alt: 'A chef carefully plating a dish' },
    { id: 4, src: '/images/gallery-drinks-1.jpeg', alt: 'A collection of vibrant cocktails on the bar' },
    { id: 5, src: '/images/gallery-dining-1.jpeg', alt: 'Friends enjoying a meal together' },
    { id: 6, src: '/images/gallery-dessert-1.jpeg', alt: 'A close-up of a delicious, artfully made dessert' },
    { id: 7, src: '/images/about-story.jpeg', alt: 'Chefs working in a busy kitchen' },
    { id: 8, src: '/images/pasta-dish.jpg', alt: 'A bowl of gourmet truffle pasta' },
];
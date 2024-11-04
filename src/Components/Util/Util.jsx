import { toast } from "react-toastify";

// Cart Functions (using "read-list" key)
export const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    try {
        return storedListStr ? JSON.parse(storedListStr) : [];
    } catch (error) {
        console.error("Failed to parse read list from local storage", error);
        return [];
    }
}

export const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (!storedList.includes(id)) {
        storedList.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedList));
        toast('This item is added to your read list.');
    } else {
        console.log(`${id} already exists in the read list.`);
    }
}

// Wishlist Functions (using "wish-list" key)
export const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    try {
        return storedWishListStr ? JSON.parse(storedWishListStr) : [];
    } catch (error) {
        console.error("Failed to parse wish list from local storage", error);
        return [];
    }
}

export const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (!storedWishList.includes(id)) {
        storedWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList));
        toast('This item is added to your wish list.');
    } else {
        console.log(`${id} already exists in the wish list.`);
    }
}

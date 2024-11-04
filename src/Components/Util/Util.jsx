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
        toast.success('This item is added to your Cart list.', { position: "top-center" });
    } else {
        toast.error(`Already exists in the Cart list!`, { position: "top-center" })
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
        toast.success('This item is added to your Wish list.', { position: "top-center" });
        return []
    } else {
        toast.error(`Already exists in the Wish list!`, { position: "top-center" })
    }
}


export const removeFromStoredReadList = (id) => {
    const storedList = getStoredReadList();
    const updatedList = storedList.filter(itemId => itemId !== id);
    localStorage.setItem('read-list', JSON.stringify(updatedList));
    toast.warn('Removed from your cartlist.');
}

export const removeFromStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    const updatedWishList = storedWishList.filter(itemId => itemId !== id);
    localStorage.setItem('wish-list', JSON.stringify(updatedWishList));
    toast.warn('Removed from your wishlist.');
}





import React from 'react';

interface ItemCounterProps {
    jumlah: number;
    page: number;
    per_page: number;
}

const ItemCounter: React.FC<ItemCounterProps> = ({ jumlah, page, per_page }) => {

    const startItem = (page - 1) * per_page + 1;
    const endItem = Math.min(page * per_page, jumlah);
    return (
        <div className="flex flex-col">
            <p className="mt-auto">Menampilkan {startItem} - {endItem} dari {jumlah} Item</p>
        </div>
    );
};

export default ItemCounter;

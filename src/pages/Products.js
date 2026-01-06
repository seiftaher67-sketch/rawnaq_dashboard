import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Filter, Search } from "lucide-react";
import Modal from "../components/ui/Modal";
import AddProduct from "./AddProduct";

export default function ProductsPage() {
    const navigate = useNavigate();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);

    const filterOptions = [
        { label: "عبايات", value: "all" },
        { label: "طرح", value: "available" },
        { label: "نقابات", value: "out_of_stock" },

    ];

    return (
        <div dir="rtl" className="min-h-screen bg-[#f5f5f5] px-8 py-6 font-sans">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">المنتجات</h1>

                    <p style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'Regular', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px', textAlign: 'right', marginTop: '16px', paddingRight: '10px' }}>إدارة وتتبع جميع طلبات العملاء</p>
                </div>
                <button onClick={() => setIsAddProductModalOpen(true)} className="text-white px-5 py-2 rounded-lg flex items-center gap-2 text-sm font-medium" style={{ background: 'linear-gradient(to right, #2f6fd6, #1e40af)' }}>
                    <span className="text-lg">+</span>
                    إضافة منتج
                </button>
            </div>

            {/* Search & Filter */}
            <div className="grid grid-cols-8 gap-4 mb-8 max-w-6xl ml-auto" style={{ paddingRight: '10px' }}>
                <div className="col-span-6 flex items-center bg-[#E8E8E8] rounded-lg px-3 py-4 shadow-sm">
                    <Search className="w-4 h-4 text-gray-600 ml-2" />
                    <input
                        className="outline-none flex-1 bg-transparent text-black placeholder-gray-500"
                        style={{
                            fontFamily: 'Cairo',
                            fontWeight: 400,
                            fontStyle: 'normal',
                            fontSize: '16px',
                            lineHeight: '100%',
                            letterSpacing: '0px',
                            textAlign: 'right'
                        }}
                        placeholder="ابحث عن منتج ..."
                    />
                </div>
                <div className="col-span-2 relative">
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="w-full flex items-center justify-start bg-[#E8E8E8] rounded-lg px-3 py-4 shadow-sm hover:bg-gray-300 transition"
                        style={{ height: '56px' }}
                    >
                        <Filter className="w-4 h-4 text-gray-600" />
                    </button>

                    {/* Dropdown Menu */}
                    {isFilterOpen && (
                        <div className="absolute top-full right-0 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-light z-50">
                            {filterOptions.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setIsFilterOpen(false);
                                    }}
                                    className="w-full px-4 py-3 text-right hover:bg-gray-light transition border-b border-gray-light last:border-b-0"
                                    style={{ fontFamily: 'Cairo', fontWeight: 400, fontSize: '18px', lineHeight: '24px', textAlign: 'right', color: '#333333' }}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-3 gap-10 max-w-6xl ml-auto" style={{ paddingRight: '10px' }}>
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="bg-white border border-gray-200 flex flex-col hover:shadow-lg transition-shadow"
                        style={{
                            width: '340px',
                            height: '509px',
                            borderRadius: '24px',
                            borderWidth: '1px',
                            transform: 'rotate(0deg)',
                            opacity: 1
                        }}
                    >
                        {/* Product Image */}
                        <div className="w-full overflow-hidden flex-shrink-0" style={{ borderTopLeftRadius: '24px', borderTopRightRadius: '24px', height: '340px' }}>
                            <img
                                src="/images/a2.jpg"
                                alt="عباية كتان"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 flex flex-col p-5">
                            {/* Name and Price */}
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-gray-800" style={{ fontFamily: 'Cairo', fontWeight: 400, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>عباية كتان</h3>
                                <div className="flex items-center gap-1">
                                    <span className="text-black font-semibold" style={{ fontFamily: 'Cairo', fontWeight: 600, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>250</span>
                                    <img src="/images/old ry.jpeg" alt="ر.س" style={{ height: '24px', width: 'auto' }} />
                                </div>
                            </div>

                            {/* Stock Info */}
                            <p className="text-gray-500 mb-6" style={{ fontFamily: 'Cairo', fontWeight: 400, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>الموجود 51</p>

                            {/* Edit Button */}
                            <button
                                onClick={() => navigate('/edit-product')}
                                className="w-full text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors hover:opacity-90"
                                style={{ backgroundColor: '#064DA8', fontFamily: 'Cairo', fontWeight: 400, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center' }}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                تعديل المنتج
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Product Modal */}
            <Modal
                isOpen={isAddProductModalOpen}
                onClose={() => setIsAddProductModalOpen(false)}
                title="إضافة منتج جديد"
            >
                <AddProduct />
            </Modal>
        </div>
    );
}

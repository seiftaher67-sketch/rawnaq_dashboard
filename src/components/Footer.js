import React from 'react';
import { Link } from 'react-router-dom';
import logooo from '../logooo.png';
import { FiInstagram, FiPhone, FiMapPin, FiMail, FiMessageCircle } from 'react-icons/fi';
import { FaFacebook, FaTiktok, FaCcVisa, FaCcMastercard, FaCcAmex, FaApple } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo */}
        <div className="text-center mb-12">
          <img
            src={logooo}
            alt="راونق"
            className="mx-auto h-40 w-auto filter brightness-0 invert drop-shadow-lg"
            style={{ marginTop: '-35px' }}
          />
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 text-right">
          {/* Right Column - روابط مهمة */}
          <div>
            <h3 className="text-lg font-semibold mb-6">روابط مهمة</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">الرئيسية</Link></li>
              <li><Link to="/offers" className="hover:text-brand-gold transition-colors">أحدث العروض</Link></li>
              <li><Link to="/washing-guide" className="hover:text-brand-gold transition-colors">تعليمات الغسيل والعناية بالملابس</Link></li>
              <li><Link to="/return-policy" className="hover:text-brand-gold transition-colors">سياسة الاسترجاع والاستبدال والاسترجاع</Link></li>
            </ul>
          </div>

          {/* Middle Column - تواصل معنا */}
          <div>
            <h3 className="text-lg font-semibold mb-6">تواصل معنا</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-2 flex-row-reverse">
                <FiPhone className="mt-1 flex-shrink-0" size={18} />
                <span>+966 551235523</span>
              </div>
              <div className="flex items-start gap-2 flex-row-reverse">
                <FiMapPin className="mt-1 flex-shrink-0" size={18} />
                <span>الشارع الإداري - مركز الإدارة</span>
              </div>
              <div className="flex items-start gap-2 flex-row-reverse">
                <FiMail className="mt-1 flex-shrink-0" size={18} />
                <span>atlascompany@gmail.com</span>
              </div>
              <div className="flex items-start gap-2 flex-row-reverse">
                <FiMessageCircle className="mt-1 flex-shrink-0" size={18} />
                <span>+966 551235523</span>
              </div>
            </div>
          </div>

          {/* Left Column - طرق الدفع */}
          <div>
            <h3 className="text-lg font-semibold mb-6">طرق الدفع</h3>
            <div className="flex gap-3 justify-end">
              <FaCcVisa size={24} />
              <FaCcMastercard size={24} />
              <FaCcAmex size={24} />
              <FaApple size={24} />
              <div className="border border-white rounded px-2 py-1 text-xs font-semibold">iDEAL</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Social Media Section */}
        <div className="text-center mb-8">
          <h4 className="text-sm font-semibold mb-4">مواقع التواصل</h4>
          <div className="flex gap-6 justify-center">
            <a href="https://instagram.com" className="hover:text-brand-gold transition-colors" aria-label="Instagram">
              <FiInstagram size={24} />
            </a>
            <a href="https://tiktok.com" className="hover:text-brand-gold transition-colors" aria-label="TikTok">
              <FaTiktok size={24} />
            </a>
            <a href="https://facebook.com" className="hover:text-brand-gold transition-colors" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-xs">حقوق الطبع © 2024 ، آلاس الشركة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

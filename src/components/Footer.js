import React from 'react';
import { Link } from 'react-router-dom';
import logooo from '../logooo.png';
import { FiInstagram, FiPhone, FiMapPin, FiMail, FiMessageCircle, FiHeadphones } from 'react-icons/fi';
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
          <div className="-ml-8">
            <p className="text-lg font-semibold mb-6">تواصل معنا</p>
            <div className="space-y-2 text-sm font-semibold">
              <p><FiMapPin className="inline mr-2" size={16} /> ش الأمير نواف بن عبدالعزيز - مرکز مزاين</p>
              <p>✉️ atlascompany@gmail.com</p>
              <p><FiPhone className="inline mr-2 text-white" size={16} />  6551235523 +96</p>
            </div>
          </div>

          {/* Left Column - مواقع التواصل و طرق الدفع */}
          <div className="flex justify-start items-center">
            {/* Payment Methods on the left */}
            <div className="flex gap-3 mr-8" style={{ marginTop: '-20px' }}>

              <img src="/images/p1.png" alt="Payment Method 1" className="h-6 w-auto" />
              <img src="/images/p2.png" alt="Payment Method 2" className="h-6 w-auto" />
              <img src="/images/p3.png" alt="Payment Method 3" className="h-6 w-auto" />
              <img src="/images/p4.png" alt="Payment Method 4" className="h-6 w-auto" />
              <img src="/images/p5.png" alt="Payment Method 5" className="h-6 w-auto" />
            </div>
            {/* Social Media on the right */}
            
            <div className="flex gap-3 mr-8">
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

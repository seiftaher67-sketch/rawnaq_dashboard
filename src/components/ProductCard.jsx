import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  id,
  image = "/1.png",
  name = "اسم المنتج",
  price = 0,
  oldPrice,
  showOldPrice = false,
  variant = "default",
}) {
  const navigate = useNavigate();
  // Variants logic
  const imageHeight = {
    default: "h-64",
    offer: "h-72",
    compact: "h-48",
    home: "h-60",
  }[variant];

  const showBuyBtn = variant !== "compact";
  const showHeart = variant !== "compact";

  return (
    <div className="relative bg-white border border-gray-200 shadow-card rounded-lg p-4 hover:shadow-lg transition">

      {/* Heart Icon */}
      {showHeart && (
        <button className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md hover:text-[#C8A06A] transition">
          <FiHeart className="text-xl" />
        </button>
      )}

      {/* Product Image */}
      <div className={`w-full overflow-hidden rounded-md ${imageHeight}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Name + Price */}
      <div className="flex items-center justify-between mt-4">
        <h3 className="text-lg font-semibold text-[#0F0F0F] truncate">{name}</h3>

        <span className="text-lg font-bold text-[#C8A06A]">
          {price} ر.س
        </span>
      </div>

      {/* Old Price */}
      {showOldPrice && (
        <p className="mt-1 text-gray-500 line-through text-sm">
          {oldPrice} ر.س
        </p>
      )}

      {/* Buttons */}
      {showBuyBtn && (
        <div className="flex items-center gap-3 mt-4">
          <button className="w-12 h-12 flex items-center justify-center bg-[#0F0F0F] text-white rounded-md hover:bg-[#222] transition">
            <FiShoppingCart className="text-2xl" />
          </button>

          <button
            onClick={() => id && navigate(`/product/${id}`)}
            className="flex-1 py-3 bg-[#C8A06A] text-white rounded-md text-lg font-semibold hover:bg-[#B58F5D] transition"
          >
            اشترِ الآن
          </button>
        </div>
      )}
    </div>
  );
}
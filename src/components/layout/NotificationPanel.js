import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/Dialog";
import { Bell, Package, Diamond, CheckCircle, Truck, RotateCcw } from "lucide-react";

const notifications = [
    {
        id: 1,
        type: 'new-order',
        title: 'تم استلام طلب جديد',
        description: 'تم استلام طلب جديد بقيمة 250 ر.س',
        time: 'منذ 5 دقائق'
    },
    {
        id: 2,
        type: 'low-stock',
        title: 'تنبيه انخفاض المخزون',
        description: 'المنتج "قميص أزرق" وصل للحد الأدنى',
        time: 'منذ 30 دقيقة'
    },
    {
        id: 3,
        type: 'payment',
        title: 'تم استلام الدفع',
        description: 'تم استلام دفعة بقيمة 500 ر.س للطلب #12340',
        time: 'منذ ساعة'
    },
    {
        id: 4,
        type: 'shipping',
        title: 'تم شحن الطلب',
        description: 'تم شحن الطلب عبر شركة أرامكس',
        time: 'منذ ساعتين'
    },
    {
        id: 5,
        type: 'return',
        title: 'طلب إرجاع',
        description: 'طلب إرجاع جديد بانتظار الموافقة',
        time: 'منذ 3 ساعات'
    }
];

const getNotificationIcon = (type) => {
    const iconClasses = "h-5 w-5";

    switch (type) {
        case 'new-order':
            return (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <Package className={`${iconClasses} text-blue-600`} />
                </div>
            );
        case 'low-stock':
            return (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <Diamond className={`${iconClasses} text-purple-600`} />
                </div>
            );
        case 'payment':
            return (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className={`${iconClasses} text-green-600`} />
                </div>
            );
        case 'shipping':
            return (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100">
                    <Truck className={`${iconClasses} text-violet-600`} />
                </div>
            );
        case 'return':
            return (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                    <RotateCcw className={`${iconClasses} text-orange-600`} />
                </div>
            );
        default:
            return (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                    <Bell className={`${iconClasses} text-gray-600`} />
                </div>
            );
    }
};

const NotificationPanel = () => {
    const newNotificationsCount = notifications.length;

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="relative rounded-full bg-secondary p-3 transition-colors hover:bg-secondary/80">
                    <Bell className="h-6 w-6 text-foreground" />
                    {newNotificationsCount > 0 && (
                        <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-destructive"></span>
                    )}
                </button>
            </DialogTrigger>
            <DialogContent className="h-[90vh] w-[350px] p-0" dir="rtl">
                <DialogHeader className="border-b border-border px-6 py-4">
                    <DialogTitle className="flex items-center justify-between text-right text-lg font-semibold">
                        <span className="font-cairo font-semibold text-2xl leading-6 text-right" style={{ fontFamily: 'Cairo', fontWeight: 600, fontSize: '24px', lineHeight: '24px', letterSpacing: '0px' }}>الإشعارات</span>
                        <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                            {newNotificationsCount} جديد
                        </span>
                    </DialogTitle>
                </DialogHeader>

                <div>
                    {notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className="flex items-start gap-4 border-b border-border px-6 py-4 transition-colors last:border-b-0 hover:bg-muted/50"
                        >
                            {getNotificationIcon(notification.type)}
                            <div className="flex-1 text-right">
                                <h4 className="text-sm font-semibold text-foreground" style={{ fontFamily: 'Cairo', fontWeight: 400, fontSize: '16px', lineHeight: '20px', letterSpacing: '0px', textAlign: 'right' }}>
                                    {notification.title}
                                </h4>
                                <p className="mt-1 text-sm text-muted-foreground" style={{ fontFamily: 'Cairo', fontWeight: 400, fontSize: '12px', lineHeight: '16px', letterSpacing: '0px', textAlign: 'right' }}>
                                    {notification.description}
                                </p>
                                <span className="mt-2 block text-xs text-muted-foreground" style={{ fontFamily: 'Cairo', fontWeight: 400, fontSize: '12px', lineHeight: '16px', letterSpacing: '0px', textAlign: 'right' }}>
                                    {notification.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default NotificationPanel;

import { useEffect } from 'react'

const InternRedirect = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href =
                'https://docs.google.com/forms/d/e/1FAIpQLSdweXkE-JjOyhfxdtTzy7msYwaY-ToCBq2dexpK0zqEcSnAPQ/viewform?usp=dialog';
        }, 1200); // small delay so users see the UI

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-colors">
            {/* Spinner */}
            <div className="w-12 h-12 border-4 border-gray-300 dark:border-gray-700 border-t-blue-600 rounded-full animate-spin mb-6" />

            {/* Text */}
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Redirecting to Internship Application
            </h2>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center max-w-sm">
                Please wait while we take you to the Wattsoft internship application form.
            </p>

            {/* Branding hint */}
            <p className="mt-6 text-xs text-gray-400">
                © Wattsoft Pvt Ltd
            </p>
        </div>
    );
};


export default InternRedirect;
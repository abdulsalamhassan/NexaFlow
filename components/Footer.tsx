import { Zap } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-2 md:col-span-1">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-blue-600 flex items-center gap-2" >
                            <div className="flex items-center justify-center text-blue-500 text-7xl rounded-lg w-8 h-8">
                                <Zap className="w-5 h-5 fill-current" />
                            </div>
                            NexaFlow
                        </Link>
                        <p className="text-sm text-slate-500">
                            Making workflow management easier for teams across the globe.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><a href="#" className="hover:text-blue-600">Features</a></li>
                            <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                            <li><a href="#" className="hover:text-blue-600">Integrations</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><a href="#" className="hover:text-blue-600">About</a></li>
                            <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><a href="#" className="hover:text-blue-600">Privacy</a></li>
                            <li><a href="#" className="hover:text-blue-600">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-100 text-center text-sm text-slate-400">
                    © {new Date().getFullYear()} NexaFlow Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
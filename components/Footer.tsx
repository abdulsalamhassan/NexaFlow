import { Zap } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="mb-3 flex items-center gap-2 text-2xl font-bold text-blue-600">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-white">
                <Zap className="h-5 w-5 fill-current" />
              </div>
              NexaFlow
            </Link>
            <p className="text-sm text-slate-500">Making workflow management easier for modern teams worldwide.</p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-slate-900">Product</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/features" className="hover:text-blue-600">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-600">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600">Integrations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-slate-900">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-slate-900">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/contact" className="hover:text-blue-600">Privacy</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-100 pt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} NexaFlow Inc. All rights reserved. Developed by{" "}
          <a
            className="font-bold text-blue-600"
            href="https://abdulsalamh.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Abdulsalam
          </a>
        </div>
      </div>
    </footer>
  );
}


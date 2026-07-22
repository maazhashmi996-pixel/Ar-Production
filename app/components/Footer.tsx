import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-6 md:grid-cols-3 md:items-center">
        <div className="flex items-center gap-3">
          <div className="relative h-20 w-30 rounded-2xl overflow-hidden ">
            <Image
              src="/logo.png"
              alt="AR Productions Logo"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#2857ff]">
              AR Productions
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Premium software, product design, and enterprise development
              services.
            </p>
          </div>
        </div>
        <div className="text-sm text-slate-500">
          <p>Email: hello@arproductions.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} AR Productions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

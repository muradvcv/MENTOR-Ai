"use client"
import Link from "next/link";
import {

  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";
import { GiThunderBlade } from "react-icons/gi";
import { LiaLinkedin } from "react-icons/lia";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Logo from "@/app/icon.png"
import Image from "next/image";

export const Footer: React.FC = () => {

  const pathname = usePathname();
  if (pathname.includes('dashboard')) {
    return null
  }



  return (
    <footer className="relative bg-[#0B0712] text-gray-300 border-t border-purple-900/30 overflow-hidden pt-16 pb-8">
      {/* Background Purple Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-purple-900/20">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
            {/* logo */}
             <Image src={Logo} alt="logo" width={50} height={50}/>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Mentor<span className="text-purple-500">.ai</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Empowering developer workflows with autonomous AI agents. Next-gen intelligence for decision-making, content generation, and smart data analysis.
            </p>
            <div className="pt-2 flex items-center gap-3">
              {[
                { icon: GiThunderBlade, href: "https://github.com" },
                { icon: LiaLinkedin, href: "https://linkedin.com" },
                { icon: BsTwitter, href: "https://twitter.com" },
                { icon: FaFacebook, href: "https://facebook.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#150D2A] border border-purple-500/20 text-gray-400 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-950/40 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base tracking-wide border-b border-purple-500/20 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "Explore Agents", path: "/explore" },
                { name: "AI Features", path: "/#features" },
                { name: "Pricing Plans", path: "/pricing" },
                { name: "Blog & Insights", path: "/blog" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.path}
                    className="text-gray-400 hover:text-purple-300 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-purple-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Protected Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base tracking-wide border-b border-purple-500/20 pb-2 inline-block">
              Management
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Add New Item", path: "/items/add" },
                { name: "Manage Dashboard", path: "/items/manage" },
                { name: "AI Workspace", path: "/workspace" },
                { name: "Analytics Report", path: "/analytics" },
                { name: "Help & Support", path: "/support" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.path}
                    className="text-gray-400 hover:text-purple-300 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-purple-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base tracking-wide border-b border-purple-500/20 pb-2 inline-block">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                <span>Level 4, House 1162, Road 10, Mirpur DOHS, Dhaka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <span>+880 1322-901105</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span>support@agentpulse.ai</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} AgentPulse.ai. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-purple-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-purple-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/cookies" className="hover:text-purple-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
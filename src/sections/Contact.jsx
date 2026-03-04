import React, { useState } from "react";
import {
    Mail,
    Github,
    Linkedin,
    Twitter,
    Phone,
    MapPin,
    Send,
    CheckCircle2,
    Copy,
    Globe
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

/* ================= SECTION HEADING ================= */

// const SectionHeading = ({ title, subtitle, badge }) => (
//     <div className="relative mb-12 space-y-3">
//         <div className="flex items-center gap-2">
//             <span className="h-px w-8 bg-theme/40"></span>
//             <span className="text-xs font-bold uppercase tracking-widest text-theme">
//                 {badge || "Get in touch"}
//             </span>
//         </div>
//         <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
//             {title}
//         </h2>
//         <p className="text-slate-400 text-base max-w-xl leading-relaxed">
//             {subtitle}
//         </p>
//     </div>
// );

/* ================= MAIN CONTACT ================= */

const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormState({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setIsSubmitted(false), 4000);
        }, 1200);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText("hello@example.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section
            id="contact"
            className="py-16 px-6 relative z-10 selection:bg-theme/30"
        >
            <div className="max-w-6xl mx-auto">

                {/* <SectionHeading
                    title="Let's Build Something Exceptional"
                    subtitle="Available for freelance & full-time opportunities."
                    badge="Contact"
                /> */}
                <SectionHeading
                    title="Let's Build Something Exceptional"
                    subtitle="< real world work />"
                />

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* LEFT COLUMN */}
                    <div className="space-y-6">

                        <div className="p-5 rounded-xl bg-white/5 border border-theme">
                            <h4 className="text-white font-semibold flex items-center gap-2 mb-2">
                                <Globe size={18} className="text-theme" />
                                Available Now
                            </h4>
                            <p className="text-slate-400 text-sm">
                                I usually respond within{" "}
                                <span className="text-theme font-medium">
                                    4-6 hours
                                </span>.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <ContactMethod
                                icon={<Mail size={18} />}
                                title="Email"
                                value="hello@example.com"
                                action={copyToClipboard}
                                actionLabel={copied ? "Copied!" : "Copy"}
                            />
                            <ContactMethod
                                icon={<Phone size={18} />}
                                title="Phone"
                                value="+91 98765 43210"
                            />
                            <ContactMethod
                                icon={<MapPin size={18} />}
                                title="Location"
                                value="India"
                            />
                        </div>

                        <div className="flex gap-3 pt-2">
                            <SocialLink icon={<Github size={18} />} />
                            <SocialLink icon={<Linkedin size={18} />} />
                            <SocialLink icon={<Twitter size={18} />} />
                        </div>

                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="bg-slate-900/50 border border-theme rounded-2xl p-6">

                        {isSubmitted ? (
                            <div className="py-16 text-center space-y-4">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-theme/20 text-theme">
                                    <CheckCircle2 size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">
                                    Message Sent!
                                </h3>
                                <p className="text-slate-400 text-sm">
                                    I’ll get back to you shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">

                                <div className="grid md:grid-cols-2 gap-4 ">
                                    <FormInput
                                        id="name"
                                        label="Name"
                                        className="px-4 py-3 rounded-xl bg-slate-950 
                                    border border-theme
                                    focus-theme
                                    outline-none text-white transition-all duration-300 resize-none"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <FormInput
                                        id="email"
                                        type="email"
                                        label="Email"
                                        className="px-4 py-3 rounded-xl bg-slate-950 
                                    border border-theme
                                    focus-theme
                                    outline-none text-white transition-all duration-300 resize-none"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <FormInput
                                        id="number"
                                        label="Number"
                                        className="px-4 py-3 rounded-xl bg-slate-950 
                                    border border-theme 
                                    focus-theme
                                    outline-none text-white transition-all duration-300 resize-none"
                                        value={formState.number}
                                        onChange={handleChange}
                                        required
                                    />
                                    <FormInput
                                        id="subject"
                                        label="Subject"
                                        className="px-4 py-3 rounded-xl bg-slate-950 
                                    border border-theme
                                    focus-theme
                                    outline-none text-white transition-all duration-300 resize-none"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>


                                <textarea
                                    id="message"
                                    rows="4"
                                    required
                                    value={formState.message}
                                    onChange={handleChange}
                                    placeholder="Your message..."
                                    className="w-full px-4 py-3 rounded-xl bg-slate-950 
                                    border border-theme
                                    focus-theme
                                    outline-none text-white transition-all duration-300 resize-none"
                                ></textarea>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 rounded-xl bg-theme text-white font-semibold 
                                    hover:shadow-theme transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={16} />
                                        </>
                                    )}
                                </button>

                            </form>
                        )}

                    </div>

                </div>
            </div>
        </section>
    );
};

/* ================= REUSABLE COMPONENTS ================= */

const FormInput = ({ id, label, type = "text", ...props }) => (
    <div>
        <label className="block text-xs font-medium text-slate-400 mb-2">
            {label}
        </label>
        <input
            id={id}
            type={type}
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 
            focus:border-theme focus:ring-4 focus:ring-theme/20 
            outline-none text-white transition-all"
            {...props}
        />
    </div>
);

const ContactMethod = ({ icon, title, value, action, actionLabel }) => (
    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-theme">
        <div className="flex items-center gap-3">
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-theme/10 text-theme">
                {icon}
            </div>
            <div>
                <p className="text-xs text-slate-500 uppercase">{title}</p>
                <p className="text-slate-200 text-sm font-medium">{value}</p>
            </div>
        </div>
        {action && (
            <button
                onClick={action}
                className="text-xs font-bold text-theme hover:text-white transition"
            >
                {actionLabel}
                <Copy size={12} className="inline ml-1" />
            </button>
        )}
    </div>
);

const SocialLink = ({ icon }) => (
    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-theme/10 text-theme hover:bg-theme hover:text-white transition-all">
        {icon}
    </div>
);

export default Contact;
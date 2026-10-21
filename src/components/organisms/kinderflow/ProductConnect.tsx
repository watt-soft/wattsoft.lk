import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { kinderFlowData } from '../../../data/kinderflow';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { TextArea } from '../../atoms/TextArea';
import { KinderFlowLogo } from '../../atoms/KinderFlowLogo';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

export const ProductConnect: React.FC = () => {
  const { contact } = kinderFlowData;
  const { elementRef, isIntersecting } = useIntersectionObserver();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    preschoolName: '',
    role: 'Principal / Administrator',
    phone: '',
    email: '',
    studentCount: '50 - 100 Students',
    message: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Wattsoft, I am interested in scheduling a demo of KinderFlow Preschool Management System for our preschool.`
  );
  const whatsappUrl = `https://wa.me/94767796422?text=${whatsappMessage}`;

  return (
    <section id="connect" className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          ref={elementRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 border border-sky-200 dark:border-sky-800 mb-4">
            <Sparkles size={13} />
            <span>Consultation & Live Demo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            Let's <span className="text-sky-600 dark:text-sky-400">Connect!</span>
          </h2>
          <p className="text-xl font-medium text-sky-700 dark:text-sky-300 mb-2">
            {contact.subtitle}
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Left Column: Direct Contact Info & Product By Wattsoft */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Action Contact Cards */}
            <div className="bg-gray-50/80 dark:bg-gray-800/80 rounded-2xl p-6 sm:p-8 space-y-6 border border-gray-200/80 dark:border-gray-700">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-5">
                <KinderFlowLogo size="md" showSubtitle={true} poweredByWattsoft={true} />
              </div>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Direct Telephone</p>
                    <a
                      href={`tel:${contact.phone1Raw}`}
                      className="block text-base font-semibold text-gray-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                    >
                      {contact.phone1}
                    </a>
                    <a
                      href={`tel:${contact.phone2Raw}`}
                      className="block text-sm text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                    >
                      {contact.phone2}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Direct Email</p>
                    <a
                      href={`mailto:${contact.email}?subject=KinderFlow%20Inquiry`}
                      className="text-base font-semibold text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Postal Address</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      {contact.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <MessageSquare size={18} />
                  <span>Chat with us on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Product by Wattsoft Card (PDF Page 10) */}
            <div className="p-6 rounded-2xl bg-gray-50/80 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary-500 dark:text-primary-400">
                PRODUCT BY
              </span>
              <h4 className="text-2xl font-heading font-extrabold text-gray-900 dark:text-white mt-1">
                WATTSOFT
              </h4>
              <p className="text-xs font-semibold text-primary-500 dark:text-primary-400 mt-1">
                {contact.companyTagline}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                {contact.companyStatement}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Demo Request / Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="bg-gray-50/80 dark:bg-gray-800/80 rounded-2xl p-6 sm:p-8 border border-gray-200/80 dark:border-gray-700">
              <div className="mb-6">
                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Request a Free Personalized Demo
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Tell us a bit about your preschool and our team will prepare a custom walkthrough for your workflow.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-4"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-300 flex items-center justify-center">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-gray-900 dark:text-white">
                    Thank You, {formData.name || 'Valued Educator'}!
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                    We received your request for <strong className="text-gray-900 dark:text-white">{formData.preschoolName || 'your preschool'}</strong>. One of our KinderFlow product specialists will contact you shortly via phone or email.
                  </p>
                  <div className="pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Inquiry
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      label="Your Name"
                      required
                      placeholder="e.g. Mrs. Nilanthi Perera"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <Input
                      name="preschoolName"
                      label="Preschool / Daycare Name"
                      required
                      placeholder="e.g. Little Stars Early Learning"
                      value={formData.preschoolName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      name="phone"
                      label="Contact Phone Number"
                      type="tel"
                      required
                      placeholder="e.g. +94 77 123 4567"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    <Input
                      name="email"
                      label="Email Address"
                      type="email"
                      required
                      placeholder="e.g. contact@littlestars.lk"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label 
                        htmlFor="role"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Your Role in Preschool
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
                      >
                        <option>Principal / Administrator</option>
                        <option>Preschool Owner / Founder</option>
                        <option>Teacher / Educator</option>
                        <option>Parent / Guardian</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label 
                        htmlFor="studentCount"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Approx. Student Enrollment
                      </label>
                      <select
                        id="studentCount"
                        name="studentCount"
                        value={formData.studentCount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
                      >
                        <option>Under 50 Students</option>
                        <option>50 - 100 Students</option>
                        <option>100 - 250 Students</option>
                        <option>250+ Students (Multiple Branches)</option>
                      </select>
                    </div>
                  </div>

                  <TextArea
                    name="message"
                    label="Questions or specific requirements"
                    placeholder="Tell us about your current challenges (e.g. manual attendance, fee overdue tracking, parent communication)..."
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-600/25 transition-all flex items-center justify-center gap-2 text-base disabled:opacity-50"
                  >
                    <Send size={18} />
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Demo Request'}</span>
                  </button>

                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    No credit card required. We will customize your live demo walkthrough to your exact student scale.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { useState } from 'react';
import { FiMail, FiMessageSquare, FiAtSign } from 'react-icons/fi';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    // In a real app, you would send the form data to a server
    console.log('Form submitted:', formData);
    
    toast({
      title: "Success!",
      description: "Your message has been sent.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contacts" className="py-20 bg-card relative">
      <div className="absolute inset-0 dot-pattern opacity-10 -z-10"></div>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <h2 className="text-3xl font-semibold mb-12"><span className="text-primary">#</span>contacts</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-400 mb-8 max-w-md">
              I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me.
            </p>
            
            <div className="border border-gray-700 rounded-lg p-6 bg-background max-w-md">
              <h3 className="text-xl font-medium mb-4">Message me here</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FiMail className="h-5 w-5 text-primary mr-3" />
                  <a href="mailto:gopal@ph.iitr.ac.in" className="text-gray-300 hover:text-white">
                  gopal@ph.iitr.ac.in
                  </a>
                </div>
                <div className="flex items-center">
                  <FiMessageSquare className="h-5 w-5 text-primary mr-3" />
                  <a href="https://t.me/unknown_5145" className="text-gray-300 hover:text-white">
                    @unknown_5145
                  </a>
                </div>
                <div className="flex items-center">
                  <FiAtSign className="h-5 w-5 text-primary mr-3" />
                  <a href="https://x.com/Gurveeeeeer?t=3dFc5NXNbHlxF_00ZmHXtQ&s=09" className="text-gray-300 hover:text-white">
                    @Gurveeeeeer
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  aria-label="Name"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  aria-label="Email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={6} 
                  value={formData.message}
                  onChange={handleChange}
                  aria-label="Message"
                  placeholder="Type your message here"
                  required
                  className="w-full px-4 py-3 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500"
                />
              </div>
              <button 
                type="submit" 
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

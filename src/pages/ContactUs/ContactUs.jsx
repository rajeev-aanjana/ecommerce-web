const ContactUs = () => {
  return (
    <section className="bg-gray-50 ">
      <div className="container-custom section-padding mx-20">
        
        <div className="mb-16 text-center">
          <span className="my-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
            Contact Us
          </span>

          <h1 className="hero-title text-gray-900">
            We'd Love To Hear From You
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            Have questions about products, orders, or support?
            Our team is always here to help you.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          <div className="card p-10">
            
            <h2 className="mb-8 text-3xl font-semibold text-gray-900">
              Get In Touch
            </h2>

            <div className="space-y-8">

              <div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  Email
                </h3>

                <p className="text-gray-500">
                  support@coco.com
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  Phone
                </h3>

                <p className="text-gray-500">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  Address
                </h3>

                <p className="max-w-sm leading-7 text-gray-500">
                  21 Ujjain, MP
                </p>
              </div>
            </div>
          </div>

          <div className="card p-10">
            
            <h2 className="mb-8 text-3xl font-semibold text-gray-900">
              Send Message
            </h2>

            <form className="space-y-6">
              
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input-field w-160 p-2 rounded-xl bg-white"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input-field w-160 p-2 rounded-xl bg-white"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="input-field w-160 p-2 rounded-xl bg-white"
                />
              </div>

              <div>
                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="input-field resize-none w-160 p-2 rounded-xl bg-white"
                ></textarea>
              </div>

              <button className="w-full rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition-all hover:opacity-90">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
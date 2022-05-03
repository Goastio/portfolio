import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import Helmet from "react-helmet";
import Footer from "./Footer";

export default function Example() {
  return (
    <>
      <Helmet>
        <title>Contact | Brandon M.</title>
        <meta name="description" content="Contact Me." />
      </Helmet>
      <div className="pt-[127px] min-h-[calc(100vh-122px)]">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-[#3e3e3e] rounded-l-md py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-[#eee] sm:text-3xl">
                Get in touch!
              </h2>
              <p className="mt-3 text-lg leading-6 text-[#eee]">
                Feel free to drop me an email.
              </p>
              <dl className="mt-8 text-base text-[#eee]">
                <div>
                  <dt className="sr-only">Postal address</dt>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">+1 941-920-5563</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">bmaczynski11@yahoo.com</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-[#4b4b4b] rounded-r-md py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form
                action="#"
                method="POST"
                className="grid grid-cols-1 gap-y-6"
              >
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className="input-tag block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-violet-500 focus:border-violet-500 border-gray-300 rounded-md"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="email"
                    className="input-tag block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-violet-500 focus:border-violet-500 border-gray-300 rounded-md"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="input-tag block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-violet-500 focus:border-violet-500 border-gray-300 rounded-md"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="input-tag block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-violet-500 focus:border-violet-500 border-gray-300 rounded-md"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#6366F1] hover:bg-[#3235ec] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

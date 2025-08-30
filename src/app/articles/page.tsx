import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { articles } from "@/data/articles";
import Link from "next/link";
import Image from "next/image";

export default function ArticlesPage() {
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-10 text-center">Articles</h1>

        {articles.map((group, idx) => (
          <section key={idx} className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">{group.name}</h2>
            <p className="text-gray-700 mb-8 italic">{group.specialMessage}</p>

            <div className="grid gap-6 sm:grid-cols-3">
              {group.articles.map((article, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-white flex flex-col overflow-hidden"
                >
                  {/* Thumbnail */}
                  {article.thumbnailUrl && (
                    <div className="w-full h-48 relative">
                      <Image
                        src={article.thumbnailUrl}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold mb-2">
                      {article.title}
                    </h3>
                    <Link
                      href={article.url}
                      target="_blank"
                      className="text-blue-600 hover:text-blue-800 font-medium mt-auto"
                    >
                      Read Article →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}

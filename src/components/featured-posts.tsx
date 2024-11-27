'use client';

import * as React from 'react';
import { getFeaturedPosts } from '@/sanity/queries';
import { image as sanityImage } from '@/sanity/image';
import dayjs from "dayjs";
import { Link } from "@/components/link";

interface Post {
    title: string | null;
    slug: string | null;
    publishedAt: string | null;
    mainImage: {
        asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
        };
        alt?: string;
    } | null;
    excerpt: string | null;
    category?: {
        title: string;
        href: string;
    };
    author?: {
        name: string | null;
        image: {
            asset?: {
                _ref: string;
                _type: "reference";
                _weak?: boolean;
            };
        } | null;
        role?: string;
    } | null;
}

// Die asynchrone Funktion, die die Daten holt und das JSX zurückgibt
async function fetchFeaturedPosts(): Promise<JSX.Element | null> {
    let featuredPosts: any = await getFeaturedPosts(3);

    if (featuredPosts.length === 0) {
        return null;
    }

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Featured</h2>
                    <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {featuredPosts.map((post: Post) => (
                        <article key={post.slug} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.publishedAt ?? ''} className="text-gray-500">
                                    {dayjs(post.publishedAt)?.format('MMMM D, YYYY')}
                                </time>
                                {post.category && (
                                    <a
                                        href={post.category.href}
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        {post.category.title}
                                    </a>
                                )}
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                    <Link href={`/blog/${post.slug}`}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.excerpt}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                {post.author && post.author.image && (
                                    <img
                                        alt={post.author.name ?? ''}
                                        src={sanityImage(post.author.image).size(64, 64).url()}
                                        className="size-10 rounded-full bg-gray-50"
                                    />
                                )}
                                <div className="text-sm/6">
                                    {post.author && (
                                        <>
                                            <p className="font-semibold text-gray-900">
                                                <a href="#">
                                                    <span className="absolute inset-0" />
                                                    {post.author.name}
                                                </a>
                                            </p>
                                            <p className="text-gray-600">{post.author.role}</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

const FeaturedPostsBox: React.FC = () => {
    const [content, setContent] = React.useState<JSX.Element | null>(null);

    React.useEffect(() => {
        // Den Rückgabewert der Promise behandeln
        const getContent = async () => {
            const result = await fetchFeaturedPosts();
            setContent(result);
        };

        getContent();
    }, []);

    return content;
};

export default FeaturedPostsBox;
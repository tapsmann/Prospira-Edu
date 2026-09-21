import { useState } from 'react'
import { Link } from 'react-router-dom'
import { H, B, C } from '@/constants/theme'
import { BLOG_POSTS } from '@/data'
import { Badge, SectionLabel, PageContainer } from '@/components/common'

export function BlogPage() {
  const [activeTag, setActiveTag] = useState('All')
  const tags = ['All', 'Career Change', 'Trades', 'Tech', 'University', 'Scholarships']

  const featuredPost = BLOG_POSTS.find(p => p.featured)
  const otherPosts = BLOG_POSTS.filter(p => !p.featured)
  const visiblePosts = activeTag === 'All' ? otherPosts : otherPosts.filter(p => p.cat === activeTag)

  return (
    <div className="w-full">
      {/* Header */}
      <section className="w-full site-section" style={{ backgroundColor: C.navy }}>
        <PageContainer>
          <SectionLabel>Knowledge Hub</SectionLabel>
          <h1
            style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(32px, 5vw, 54px)', color: 'white', marginBottom: '10px' }}
          >
            Success Stories & Insights
          </h1>
          <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(15px, 1.5vw, 17px)', marginBottom: '28px' }}>
            Real stories of young people who found their purpose. Plus practical guides for your journey.
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all"
                style={{
                  fontFamily: B,
                  backgroundColor: activeTag === t ? C.emerald : 'rgba(255,255,255,0.07)',
                  color: activeTag === t ? 'white' : 'rgba(255,255,255,0.6)',
                  border: `1.5px solid ${activeTag === t ? C.emerald : 'rgba(255,255,255,0.1)'}`,
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Content */}
      <section className="w-full site-section" style={{ backgroundColor: C.cream }}>
        <PageContainer>
          {featuredPost && (
            <div
              className="rounded-2xl overflow-hidden mb-8 grid grid-cols-1 lg:grid-cols-2 transition-all hover:shadow-xl"
              style={{ backgroundColor: 'white', border: `1px solid ${C.border}` }}
            >
              <div className="relative overflow-hidden" style={{ height: '260px', backgroundColor: C.navyMid }}>
                <img
                  src={featuredPost.img}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to right, transparent 60%, rgba(0,0,0,0.3) 100%)' }}
                />
              </div>
              <div
                className="flex flex-col justify-center"
                style={{ padding: '28px 24px' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-md text-white uppercase tracking-wider"
                    style={{ backgroundColor: C.emerald, fontFamily: B }}
                  >
                    Featured Story
                  </span>
                  <span style={{ fontFamily: B, fontSize: '12px', color: '#888' }}>
                    {featuredPost.time}
                  </span>
                </div>
                <Link to={`/blog/${featuredPost.slug}`} style={{ textDecoration: 'none' }}>
                  <h2
                    style={{ fontFamily: H, fontWeight: 700, fontSize: 'clamp(20px, 3vw, 28px)', color: C.navy, lineHeight: 1.2, marginBottom: '12px' }}
                  >
                    {featuredPost.title}
                  </h2>
                </Link>
                <p
                  style={{ fontFamily: B, color: '#6B6B6B', lineHeight: 1.7, marginBottom: '20px' }}
                >
                  {featuredPost.excerpt}
                </p>
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="text-sm font-semibold transition-opacity hover:opacity-70 text-left"
                  style={{ color: C.emerald, fontFamily: B }}
                >
                  Read More &#8594;
                </Link>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visiblePosts.map((post) => (
              <div
                key={post.title}
                className="rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                style={{ backgroundColor: 'white', border: `1px solid ${C.border}` }}
              >
                <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <div
                    className="relative overflow-hidden"
                    style={{ height: '180px', backgroundColor: C.navyMid }}
                  >
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                </Link>
                <div style={{ padding: '20px' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge label={post.cat} color={C.emerald} />
                    <span style={{ fontFamily: B, fontSize: '11px', color: '#888' }}>{post.time}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <h3
                      className="font-bold mb-1.5 leading-snug"
                      style={{ fontFamily: H, fontSize: '16px', color: C.navy }}
                    >
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: B, color: '#6B6B6B' }}>
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-sm font-medium transition-opacity hover:opacity-60"
                    style={{ color: C.emerald, fontFamily: B }}
                  >
                    Read More &#8594;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {visiblePosts.length === 0 && (
            <p className="text-center text-sm mt-4" style={{ fontFamily: B, color: '#6B6B6B' }}>
              No stories under “{activeTag}” yet — check back soon.
            </p>
          )}

          <div className="text-center mt-10">
            <button
              className="px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:shadow-md"
              style={{
                fontFamily: H,
                border: `1.5px solid ${C.border}`,
                color: C.navy,
                backgroundColor: 'white',
              }}
            >
              Load More Stories &#8594;
            </button>
          </div>
        </PageContainer>
      </section>
    </div>
  )
}

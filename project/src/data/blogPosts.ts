import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence in Web Development",
    description: "Explore how AI is revolutionizing the way we build and design websites, from automated coding to intelligent user experiences.",
    content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence is transforming every aspect of web development, from how we write code to how users interact with websites. This comprehensive guide explores the current state and future potential of AI in web development.</p>
      
      <h3>AI-Powered Code Generation</h3>
      <p>Tools like GitHub Copilot and ChatGPT are already helping developers write code faster and more efficiently. These AI assistants can:</p>
      <ul>
        <li>Generate boilerplate code automatically</li>
        <li>Suggest optimizations and best practices</li>
        <li>Help debug complex issues</li>
        <li>Translate code between different languages</li>
      </ul>
      
      <h3>Intelligent User Interfaces</h3>
      <p>AI is enabling more personalized and adaptive user interfaces that can:</p>
      <ul>
        <li>Customize content based on user behavior</li>
        <li>Provide intelligent search and recommendations</li>
        <li>Adapt layouts for different devices and preferences</li>
        <li>Offer real-time language translation</li>
      </ul>
      
      <h3>Automated Testing and Quality Assurance</h3>
      <p>AI-powered testing tools are revolutionizing quality assurance by automatically generating test cases, identifying potential bugs, and ensuring cross-browser compatibility.</p>
      
      <h3>The Road Ahead</h3>
      <p>As AI continues to evolve, we can expect even more sophisticated tools that will further streamline the development process while enabling more intelligent and responsive web applications.</p>
      
      <blockquote>
        "The future of web development lies in the seamless integration of human creativity and artificial intelligence." - Tech Industry Expert
      </blockquote>
    `,
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "AI & Technology",
    readTime: "5 min read",
    tags: ["AI", "Web Development", "Machine Learning", "Future Tech"],
    slug: "future-of-ai-in-web-development"
  },
  {
    id: 2,
    title: "Mastering React Hooks: Advanced Patterns and Best Practices",
    description: "Deep dive into advanced React hooks patterns that will make your components more efficient and maintainable.",
    content: `
      <h2>Understanding React Hooks</h2>
      <p>React Hooks have revolutionized how we write React components, allowing us to use state and other React features in functional components. This guide covers advanced patterns and best practices.</p>
      
      <h3>Custom Hooks for Reusability</h3>
      <p>Creating custom hooks is one of the most powerful patterns in React. Here's how to build reusable logic:</p>
      
      <pre><code>
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
      </code></pre>
      
      <h3>Performance Optimization with useMemo and useCallback</h3>
      <p>Learn when and how to use these optimization hooks effectively:</p>
      <ul>
        <li>useMemo for expensive calculations</li>
        <li>useCallback for stable function references</li>
        <li>React.memo for component memoization</li>
      </ul>
      
      <h3>Advanced useEffect Patterns</h3>
      <p>Master the useEffect hook with these advanced patterns:</p>
      <ul>
        <li>Cleanup functions for preventing memory leaks</li>
        <li>Dependency arrays and their gotchas</li>
        <li>Conditional effects and optimization</li>
      </ul>
      
      <h3>State Management with useReducer</h3>
      <p>For complex state logic, useReducer provides a more predictable state management solution than useState.</p>
    `,
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: "Michael Chen",
    date: "March 12, 2024",
    category: "React",
    readTime: "8 min read",
    tags: ["React", "Hooks", "JavaScript", "Frontend"],
    slug: "mastering-react-hooks-advanced-patterns"
  },
  {
    id: 3,
    title: "Building Scalable Cloud Applications with Modern DevOps",
    description: "Learn how to architect and deploy applications that can handle millions of users using cutting-edge cloud technologies.",
    content: `
      <h2>The Cloud-Native Approach</h2>
      <p>Building scalable applications requires a fundamental shift in how we think about architecture, deployment, and operations. This guide covers the essential principles of cloud-native development.</p>
      
      <h3>Microservices Architecture</h3>
      <p>Breaking down monolithic applications into microservices offers several advantages:</p>
      <ul>
        <li>Independent scaling of different components</li>
        <li>Technology diversity across services</li>
        <li>Improved fault isolation</li>
        <li>Faster deployment cycles</li>
      </ul>
      
      <h3>Container Orchestration with Kubernetes</h3>
      <p>Kubernetes has become the standard for container orchestration, providing:</p>
      <ul>
        <li>Automated deployment and scaling</li>
        <li>Service discovery and load balancing</li>
        <li>Rolling updates and rollbacks</li>
        <li>Health monitoring and self-healing</li>
      </ul>
      
      <h3>CI/CD Pipeline Best Practices</h3>
      <p>A robust CI/CD pipeline is crucial for scalable applications:</p>
      <ol>
        <li>Automated testing at multiple levels</li>
        <li>Infrastructure as Code (IaC)</li>
        <li>Blue-green deployments</li>
        <li>Monitoring and observability</li>
      </ol>
      
      <h3>Monitoring and Observability</h3>
      <p>Understanding your application's behavior in production is critical for maintaining scalability and reliability.</p>
      
      <blockquote>
        "You can't manage what you can't measure. Observability is the key to successful cloud operations."
      </blockquote>
    `,
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: "David Rodriguez",
    date: "March 10, 2024",
    category: "DevOps",
    readTime: "12 min read",
    tags: ["DevOps", "Cloud", "Kubernetes", "Scalability"],
    slug: "building-scalable-cloud-applications-devops"
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox: When to Use Which Layout System",
    description: "A comprehensive guide to choosing between CSS Grid and Flexbox for your next project, with practical examples.",
    content: `
      <h2>Understanding Layout Systems</h2>
      <p>CSS Grid and Flexbox are both powerful layout systems, but they serve different purposes. Understanding when to use each one is crucial for efficient web development.</p>
      
      <h3>Flexbox: One-Dimensional Layouts</h3>
      <p>Flexbox excels at one-dimensional layouts, either in a row or column:</p>
      <ul>
        <li>Navigation bars and menus</li>
        <li>Centering content vertically and horizontally</li>
        <li>Distributing space between items</li>
        <li>Creating responsive card layouts</li>
      </ul>
      
      <h4>Flexbox Example:</h4>
      <pre><code>
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.flex-item {
  flex: 1;
  min-width: 0; /* Prevents overflow */
}
      </code></pre>
      
      <h3>CSS Grid: Two-Dimensional Layouts</h3>
      <p>CSS Grid is perfect for complex, two-dimensional layouts:</p>
      <ul>
        <li>Page layouts with headers, sidebars, and footers</li>
        <li>Image galleries and photo grids</li>
        <li>Dashboard layouts</li>
        <li>Magazine-style layouts</li>
      </ul>
      
      <h4>CSS Grid Example:</h4>
      <pre><code>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  gap: 1rem;
  min-height: 100vh;
}
      </code></pre>
      
      <h3>Combining Both Systems</h3>
      <p>The most powerful approach is often combining both systems:</p>
      <ul>
        <li>Use Grid for the overall page layout</li>
        <li>Use Flexbox for component-level layouts</li>
        <li>Nest Flexbox containers within Grid areas</li>
      </ul>
      
      <h3>Decision Framework</h3>
      <p>Ask yourself these questions:</p>
      <ol>
        <li>Do I need to control both rows and columns? → Use Grid</li>
        <li>Am I working with a single row or column? → Use Flexbox</li>
        <li>Do I need precise control over item placement? → Use Grid</li>
        <li>Do I need flexible space distribution? → Use Flexbox</li>
      </ol>
    `,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: "Emily Parker",
    date: "March 8, 2024",
    category: "CSS",
    readTime: "6 min read",
    tags: ["CSS", "Grid", "Flexbox", "Layout"],
    slug: "css-grid-vs-flexbox-layout-guide"
  },
  {
    id: 5,
    title: "Cybersecurity Best Practices for Modern Web Applications",
    description: "Essential security measures every developer should implement to protect their applications from common threats.",
    content: `
      <h2>The Security Landscape</h2>
      <p>Web application security is more critical than ever. With cyber attacks becoming increasingly sophisticated, developers must implement robust security measures from the ground up.</p>
      
      <h3>Authentication and Authorization</h3>
      <p>Proper authentication and authorization are the foundation of web security:</p>
      <ul>
        <li>Implement multi-factor authentication (MFA)</li>
        <li>Use strong password policies</li>
        <li>Implement proper session management</li>
        <li>Use JWT tokens securely</li>
      </ul>
      
      <h3>Input Validation and Sanitization</h3>
      <p>Never trust user input. Always validate and sanitize:</p>
      <ul>
        <li>Server-side validation is mandatory</li>
        <li>Use parameterized queries to prevent SQL injection</li>
        <li>Sanitize HTML to prevent XSS attacks</li>
        <li>Validate file uploads thoroughly</li>
      </ul>
      
      <h3>HTTPS and Data Encryption</h3>
      <p>Encrypt data in transit and at rest:</p>
      <ul>
        <li>Use HTTPS everywhere</li>
        <li>Implement proper SSL/TLS configuration</li>
        <li>Encrypt sensitive data in databases</li>
        <li>Use secure communication protocols</li>
      </ul>
      
      <h3>Security Headers</h3>
      <p>Implement essential security headers:</p>
      <pre><code>
// Express.js example
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000');
  res.setHeader('Content-Security-Policy', "default-src 'self'");
  next();
});
      </code></pre>
      
      <h3>Regular Security Audits</h3>
      <p>Security is an ongoing process:</p>
      <ul>
        <li>Conduct regular penetration testing</li>
        <li>Keep dependencies updated</li>
        <li>Monitor for security vulnerabilities</li>
        <li>Implement logging and monitoring</li>
      </ul>
      
      <h3>OWASP Top 10</h3>
      <p>Stay informed about the most critical security risks as identified by OWASP and implement appropriate countermeasures.</p>
    `,
    image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: "Alex Thompson",
    date: "March 5, 2024",
    category: "Security",
    readTime: "10 min read",
    tags: ["Security", "Cybersecurity", "Web Development", "OWASP"],
    slug: "cybersecurity-best-practices-web-applications"
  },
  {
    id: 6,
    title: "The Rise of Progressive Web Apps: Building App-Like Experiences",
    description: "Discover how PWAs are bridging the gap between web and mobile apps, offering native-like experiences in the browser.",
    content: `
      <h2>What are Progressive Web Apps?</h2>
      <p>Progressive Web Apps (PWAs) combine the best of web and mobile apps, delivering app-like experiences through web browsers. They're reliable, fast, and engaging.</p>
      
      <h3>Core PWA Features</h3>
      <p>PWAs are characterized by several key features:</p>
      <ul>
        <li><strong>Progressive:</strong> Work for every user, regardless of browser choice</li>
        <li><strong>Responsive:</strong> Fit any form factor: desktop, mobile, tablet</li>
        <li><strong>Offline-first:</strong> Work offline or with poor connectivity</li>
        <li><strong>App-like:</strong> Feel like native apps with app-style interactions</li>
        <li><strong>Secure:</strong> Served via HTTPS to prevent tampering</li>
        <li><strong>Installable:</strong> Can be installed on the home screen</li>
      </ul>
      
      <h3>Service Workers: The Heart of PWAs</h3>
      <p>Service workers enable many PWA features:</p>
      <pre><code>
// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(registration => {
      console.log('SW registered: ', registration);
    })
    .catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
}
      </code></pre>
      
      <h3>Web App Manifest</h3>
      <p>The manifest file defines how your app appears to users:</p>
      <pre><code>
{
  "name": "My PWA",
  "short_name": "PWA",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
      </code></pre>
      
      <h3>Caching Strategies</h3>
      <p>Implement effective caching for optimal performance:</p>
      <ul>
        <li><strong>Cache First:</strong> For static assets</li>
        <li><strong>Network First:</strong> For dynamic content</li>
        <li><strong>Stale While Revalidate:</strong> For frequently updated content</li>
      </ul>
      
      <h3>Push Notifications</h3>
      <p>Engage users with timely notifications, even when the app isn't open.</p>
      
      <h3>Benefits of PWAs</h3>
      <ul>
        <li>Improved performance and user experience</li>
        <li>Reduced development and maintenance costs</li>
        <li>Better SEO compared to native apps</li>
        <li>No app store approval process</li>
        <li>Automatic updates</li>
      </ul>
      
      <blockquote>
        "PWAs represent the future of web development, combining the reach of the web with the experience of native apps."
      </blockquote>
    `,
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    author: "Jessica Wilson",
    date: "March 3, 2024",
    category: "Web Development",
    readTime: "7 min read",
    tags: ["PWA", "Web Development", "Mobile", "Performance"],
    slug: "rise-of-progressive-web-apps"
  }
];

export const categories = [
  { id: 'all', name: 'All Posts', count: blogPosts.length },
  { id: 'ai-technology', name: 'AI & Technology', count: blogPosts.filter(post => post.category === 'AI & Technology').length },
  { id: 'react', name: 'React', count: blogPosts.filter(post => post.category === 'React').length },
  { id: 'devops', name: 'DevOps', count: blogPosts.filter(post => post.category === 'DevOps').length },
  { id: 'css', name: 'CSS', count: blogPosts.filter(post => post.category === 'CSS').length },
  { id: 'security', name: 'Security', count: blogPosts.filter(post => post.category === 'Security').length },
  { id: 'web-development', name: 'Web Development', count: blogPosts.filter(post => post.category === 'Web Development').length }
];
import RoleCard from './RoleCard';

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* Left Text Section */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h2 className="text-lg text-gray-600">Hello, I’m</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">DEEPIKA</h1>
          <p className="text-gray-600 mb-6">
            Architect with 12+ years of experience designing residential and commercial spaces. 
            Passionate about blending aesthetics with functionality.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a href="mailto:architect@email.com">
              <img src="/icons/email.png" alt="email" className="h-6 w-6" />
            </a>
            <a href="https://behance.net/architect" target="_blank" rel="noreferrer">
              <img src="/icons/behance.png" alt="behance" className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Middle Profile Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src="/images/deepika3.png"
            alt="profile"
            className="h-72 md:h-96 object-contain"
          />
        </div>

        {/* Right Roles Section */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-end gap-6">
          <RoleCard title="Architect" imageUrl="/roles/architect.png" />
          <RoleCard title="Urban Planner" imageUrl="/roles/3d.png" />
          <RoleCard title="Interior Consultant" imageUrl="/roles/interior.png" />
          <RoleCard title="Model" imageUrl="/roles/interior.png" />
          <RoleCard title="Author" imageUrl="/roles/interior.png" />
          <RoleCard title="Researcher" imageUrl="/roles/interior.png" />
        </div>
      </div>
    </section>
  );
}

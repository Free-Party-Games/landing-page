interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function NavigationTabs({ activeTab, onTabChange }: NavigationTabsProps) {
  return (
    <section id="games" className="relative max-w-7xl mx-auto px-4 mb-8">
      <div className="bg-white border-4 border-black rounded-lg overflow-hidden" style={{borderRadius: '15px'}}>
        <div className="flex flex-col sm:flex-row">
          <button
            onClick={() => onTabChange('all')}
            className={`doodle-tab flex-1 border-b-3 sm:border-b-0 sm:border-r-3 border-black ${
              activeTab === 'all' ? 'active' : ''
            }`}
          >
            All Games
          </button>
          <button
            onClick={() => onTabChange('quick')}
            className={`doodle-tab flex-1 border-b-3 sm:border-b-0 sm:border-r-3 border-black ${
              activeTab === 'quick' ? 'active' : ''
            }`}
          >
            Quick Play
          </button>
          <button
            onClick={() => onTabChange('about')}
            className={`doodle-tab flex-1 ${
              activeTab === 'about' ? 'active' : ''
            }`}
          >
            About
          </button>
        </div>
      </div>
    </section>
  );
}

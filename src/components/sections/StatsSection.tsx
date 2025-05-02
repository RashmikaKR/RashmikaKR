
import React from 'react';
import portfolioData from '@/data/portfolioData';
import { useInView } from '@/hooks/useInView';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StatsSection: React.FC = () => {
  const { githubStats, leetCodeStats } = portfolioData;
  const { ref, isInView } = useInView();

  return (
    <section className="py-20">
      <div className="section-container">
        <h2 className="section-title">Coding Stats</h2>
        
        <div 
          ref={ref}
          className={`fade-in-section ${isInView ? 'is-visible' : ''} grid md:grid-cols-2 gap-10`}
        >
          {/* GitHub Stats */}
          <div className="bg-card border border-border rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4">GitHub Stats</h3>
            
            <div className="flex flex-col items-center">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubStats.username}&show_icons=true&hide_border=true&theme=tokyonight`}
                alt="GitHub Stats"
                className="w-full max-w-md mb-4"
              />
              
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubStats.username}&theme=tokyonight&hide_border=true`}
                alt="GitHub Streak Stats"
                className="w-full max-w-md mb-4"
              />

              {/* Languages Chart */}
              <Card className="w-full mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">I Mostly Code in</CardTitle>
                </CardHeader>
                <CardContent>
                  {githubStats.languages.map((lang, index) => (
                    <div key={index} className="mb-2">
                      <div className="flex justify-between mb-1">
                        <span>{lang.name}</span>
                        <span>{lang.percentage}%</span>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${lang.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Productivity Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Daily Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {githubStats.commitActivity.map((time, index) => (
                      <div key={index} className="mb-2">
                        <div className="flex justify-between mb-1">
                          <span>{time.time}</span>
                          <span>{time.percentage}%</span>
                        </div>
                        <div className="w-full bg-muted/50 rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${time.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Most Active Days</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {githubStats.productiveDay.map((day, index) => (
                      <div key={index} className="mb-2">
                        <div className="flex justify-between mb-1">
                          <span>{day.day}</span>
                          <span>{day.percentage}%</span>
                        </div>
                        <div className="w-full bg-muted/50 rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${day.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {/* LeetCode Stats */}
          <div className="bg-card border border-border rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4">LeetCode Stats</h3>
            
            <div className="flex flex-col items-center">
              <div className="w-full max-w-md mb-8">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                    <p className="text-green-600 dark:text-green-400 text-3xl font-bold">
                      {leetCodeStats.solved.easy}
                    </p>
                    <p className="text-sm mt-1">Easy</p>
                  </div>
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg">
                    <p className="text-yellow-600 dark:text-yellow-400 text-3xl font-bold">
                      {leetCodeStats.solved.medium}
                    </p>
                    <p className="text-sm mt-1">Medium</p>
                  </div>
                  <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">
                    <p className="text-red-600 dark:text-red-400 text-3xl font-bold">
                      {leetCodeStats.solved.hard}
                    </p>
                    <p className="text-sm mt-1">Hard</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full bg-muted/50 rounded-full h-4 mb-2">
                <div
                  className="bg-primary h-4 rounded-full"
                  style={{ 
                    width: `${Math.min(
                      ((leetCodeStats.solved.easy + leetCodeStats.solved.medium + leetCodeStats.solved.hard) / (120 + 320 + 160)) * 100,
                      100
                    )}%` 
                  }}
                ></div>
              </div>
              <div className="text-center mt-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  {leetCodeStats.solved.easy + leetCodeStats.solved.medium + leetCodeStats.solved.hard} problems solved
                </p>
              </div>

              <img
                src={`https://leetcard.jacoblin.cool/${leetCodeStats.username}?ext=heatmap`}
                alt="LeetCode Stats"
                className="w-full max-w-md rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Activity graph */}
        <div className="mt-10 bg-card border border-border rounded-lg p-6 shadow-md overflow-hidden">
          <h3 className="text-2xl font-bold mb-4">Activity Overview</h3>
          <div className="w-full overflow-x-auto">
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubStats.username}&bg_color=0D1117&color=ffffff&line=5BCDEC&point=FFFFFF&area=true&hide_border=true`}
              alt="GitHub Activity Graph"
              className="w-full min-w-[800px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

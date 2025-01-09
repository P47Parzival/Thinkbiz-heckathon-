# Janab Donations

At Inventory Manager, our mission is to ensure that no food goes to waste and that every meal reaches those in need. We work tirelessly to connect surplus food with communities facing food insecurity, providing immediate relief and long-term support.

Through our various programs and initiatives, we aim to create a sustainable food system where everyone has access to nutritious meals. Join us in our mission to make a difference, one meal at a time.

<footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold mb-2">Janabs</h3>
              <p className="text-sm">© 2025 Janabs Donation. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-sm hover:text-gray-400">Documentation</a>
              <a href="#" className="text-sm hover:text-gray-400">Help Center</a>
              <a href="#" className="text-sm hover:text-gray-400">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-gray-400">Terms of Service</a>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div className="flex space-x-4">
              <a href="#" className="text-sm hover:text-gray-400">Facebook</a>
              <a href="#" className="text-sm hover:text-gray-400">Twitter</a>
              <a href="#" className="text-sm hover:text-gray-400">Instagram</a>
              <a href="#" className="text-sm hover:text-gray-400">LinkedIn</a>
            </div>
            <div>
              <p className="text-sm">Contact us: donations@janabs.com</p>
            </div>
          </div>
        </div>
      </footer>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Campaigns</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Emergency Relief: East Africa",
                  description: "Provide immediate food assistance to families affected by severe drought.",
                  goal: "$500,000",
                  raised: "$50,000"
                },
                {
                  title: "School Meals Program",
                  description: "Help us provide nutritious meals to children in underprivileged schools.",
                  goal: "$300,000",
                  raised: "$275,000"
                },
                {
                  title: "Local Food Banks Support",
                  description: "Support local food banks in distributing meals to families in need.",
                  goal: "$200,000",
                  raised: "$50,000"
                }
              ].map((campaign) => (
                <Card key={campaign.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{campaign.title}</h3>
                    <p className="text-gray-600 mb-4">{campaign.description}</p>
                    <div className="space-y-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${(parseInt(campaign.raised.replace(/\D/g, '')) / parseInt(campaign.goal.replace(/\D/g, ''))) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Raised: {campaign.raised}</span>
                        <span className="text-gray-600">Goal: {campaign.goal}</span>
                      </div>
                    </div>
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors flex items-center justify-center">
                      Donate Now <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

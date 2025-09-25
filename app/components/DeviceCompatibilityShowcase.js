{
  /* Real Device Cards - COMPACT VERSION */
}
<div className="max-w-6xl mx-auto">
  <AnimatePresence mode="wait">
    <motion.div
      key={`${activeCategory}-${searchQuery}-${currentPage}-${viewMode}`}
      className={
        viewMode === "grid"
          ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          : "space-y-4"
      }
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {currentDevices.map((device, index) => (
        <motion.div
          key={device.id}
          className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          whileHover={{ y: -3 }}
        >
          {/* Compact Device Header */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-start justify-between mb-2">
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-lg text-gray-800 truncate">
                  {device.name}
                </h3>
                <p className="text-gray-500 text-sm truncate">
                  {device.manufacturer} • {device.type}
                </p>
              </div>
              <div className="flex gap-1 ml-2 flex-shrink-0">
                {device.verified && (
                  <span className="bg-green-100 text-green-800 text-xs px-1.5 py-0.5 rounded-full">
                    <Shield className="w-3 h-3 inline" />
                  </span>
                )}
                {device.popular && (
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-1.5 py-0.5 rounded-full">
                    <Star className="w-3 h-3 fill-current inline" />
                  </span>
                )}
              </div>
            </div>

            {/* Compact Rating */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-sm">
                  {device.marketRating}
                </span>
                <span className="text-xs text-gray-400">
                  ({device.releaseYear})
                </span>
              </div>
              {device.officialSupport && (
                <div className="flex items-center gap-1 text-green-600 text-xs">
                  <CheckCircle className="w-3 h-3" />
                  <span>Official</span>
                </div>
              )}
            </div>
          </div>

          {/* Compact Content */}
          <div className="p-4">
            {/* Top 3 Features Only */}
            <div className="space-y-1.5 mb-4">
              {device.features.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-600 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
              {device.features.length > 3 && (
                <div className="text-xs text-blue-600 ml-5">
                  +{device.features.length - 3} more features
                </div>
              )}
            </div>

            {/* Compact Technical Info */}
            <div className="grid grid-cols-1 gap-2 text-xs mb-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Installation:</span>
                <div className="flex items-center gap-1">
                  {getInstallationIcon(device.installation)}
                  <span className="text-gray-700 text-xs">
                    {device.installation.includes("Professional")
                      ? "Professional"
                      : device.installation.includes("plug")
                      ? "Plug & Play"
                      : "Easy Install"}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500">Power:</span>
                <span className="text-gray-700 text-xs">
                  {device.powerSupply.includes("battery")
                    ? "Battery"
                    : device.powerSupply.includes("12V")
                    ? "12V Vehicle"
                    : "Vehicle Power"}
                </span>
              </div>
            </div>

            {/* Compact Connectivity Tags */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {device.connectivity.slice(0, 3).map((conn, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded"
                  >
                    {conn}
                  </span>
                ))}
                {device.connectivity.length > 3 && (
                  <span className="text-xs text-gray-400">
                    +{device.connectivity.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Compact Industries */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {device.industries.slice(0, 2).map((industry, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                  >
                    {industry}
                  </span>
                ))}
                {device.industries.length > 2 && (
                  <span className="text-xs text-gray-400">
                    +{device.industries.length - 2}
                  </span>
                )}
              </div>
            </div>

            {/* Compact Actions */}
            <div className="flex gap-2">
              <button className="flex-1 bg-brand-green text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-brand-green-dark transition-colors flex items-center justify-center gap-1">
                View Details
                <ArrowRight className="w-3 h-3" />
              </button>
              <button className="px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </AnimatePresence>

  {/* Rest of your component stays the same */}
</div>;

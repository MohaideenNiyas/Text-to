import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Download, Image, Wand2 } from 'lucide-react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [steps, setSteps] = useState(4);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate image generation
    setTimeout(() => {
      setImageUrl('https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5');
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AI Image Generator
          </h1>
          <p className="text-gray-400">Transform your ideas into stunning visuals with AI</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Controls */}
          <div className="space-y-6">
            {/* Prompt Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Enter your prompt
              </label>
              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full h-32 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 resize-none"
                  placeholder="A serene landscape with mountains..."
                />
              </div>
            </div>

            {/* Inference Steps Slider */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Number of inference steps: {steps}
              </label>
              <input
                type="range"
                min="1"
                max="50"
                value={steps}
                onChange={(e) => setSteps(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>

            {/* Advanced Settings */}
            <div className="bg-gray-800/50 rounded-lg border border-gray-700">
              <button
                onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                className="w-full px-4 py-3 flex items-center justify-between text-gray-300 hover:text-white transition-colors"
              >
                <span className="font-medium">Advanced Settings</span>
                {isAdvancedOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {isAdvancedOpen && (
                <div className="px-4 py-3 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">Advanced settings coming soon...</p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleGenerate}
                disabled={isGenerating || !prompt}
                className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Wand2 className="w-5 h-5" />
                {isGenerating ? 'Generating...' : 'Generate Image'}
              </button>
              <button
                disabled={!imageUrl}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-green-800 disabled:cursor-not-allowed rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download
              </button>
            </div>
          </div>

          {/* Right Column - Image Preview */}
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-4">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Generated"
                className="w-full h-[500px] object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-[500px] flex flex-col items-center justify-center text-gray-500 border-2 border-dashed border-gray-700 rounded-lg">
                <Image className="w-12 h-12 mb-4" />
                <p className="text-lg font-medium">Image will appear here</p>
                <p className="text-sm">Enter a prompt and click generate</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
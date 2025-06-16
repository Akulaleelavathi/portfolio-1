'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					Machine Learning Projects
				</motion.h2>

				<div className="space-y-16">
					{/* E-commerce Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Seller-buyer chatbot Platform</h3>
										<p className="text-gray-400">
											A high-performance AI-CHATBOT solution handling 100K+ daily queries with real-time inventory and ML-powered recommendations using langgraph.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Architecture</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Streamlit</li>
												<li>• JS</li>
												<li>• Css</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Systems</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Langgraph</li>
												<li>• Python</li>
												<li>• Tools</li>
												<li>• Azure models</li>
												<li>• OpenAI query Search</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• 99.99% Uptime Deployment</li>
											<li>• 200ms Average API Response Time</li>
											<li>• 80% Reduction in human interaction</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										{/* Add detailed system architecture diagram here */}
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Client Layer */}
											<g>
												<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
													streamlit Frontend ( Client Components)
												</text>
											</g>

											{/* API Layer */}
											<g>
												<rect x="20" y="80" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<rect x="210" y="80" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													supervisor Service
												</text>
												<text x="295" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													supervisor Service
												</text>
											</g>

											{/* Cache Layer */}
											<g>
												<rect x="20" y="140" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="160" textAnchor="middle" className="fill-gray-400 text-[12px]">
													tools
												</text>
											</g>

											{/* Database Layer */}
											<g>
												<rect x="20" y="190" width="170" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="210" y="190" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Prompt
												</text>
												<text x="295" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Azure models
												</text>
											</g>

											{/* Search Layer */}
											<g>
												<rect x="20" y="250" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="270" textAnchor="middle" className="fill-gray-400 text-[12px]">
													OPENAIsearch Search
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="80" />
												<line x1="105" y1="120" x2="105" y2="140" />
												<line x1="295" y1="120" x2="295" y2="140" />
												<line x1="105" y1="170" x2="105" y2="190" />
												<line x1="295" y1="170" x2="295" y2="190" />
												<line x1="200" y1="230" x2="200" y2="250" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Real-time Analytics Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Real-time Analytics Platform</h3>
										<p className="text-gray-400">
											A real-time intelligent parsing system leveraging GPT-4.0-mini via PromptFlow for seamless data extraction across product descriptions, images, invoices, and payments.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">BackEnd Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• promptFlow</li>
												<li>•Azure model</li>
												<li>• Yaml files</li>
												<li>• Fast API</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Performance Metrics</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• 1M+ Events/Minute Processing</li>
											<li>• Sub-second Query Response</li>
											<li>• 99.99% Data Accuracy</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">Data Flow Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Data Sources */}
											<g>
												<rect x="20" y="20" width="110" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="145" y="20" width="110" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="270" y="20" width="110" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="75" y="40" textAnchor="middle" className="fill-gray-400 text-[12px]">
													FastAPI
												</text>
												<text x="200" y="40" textAnchor="middle" className="fill-gray-400 text-[12px]">
													LLM: GPT-4.0-mini
												</text>
												<text x="325" y="40" textAnchor="middle" className="fill-gray-400 text-[12px]">
													PromptFlow
												</text>
											</g>

											{/* Event Processing */}
											<g>
												<rect x="20" y="80" width="360" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="200" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													find the type of file 
												</text>
											</g>

											{/* Processing Layer */}
											<g>
												<rect x="20" y="150" width="170" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<rect x="210" y="150" width="170" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="105" y="175" textAnchor="middle" className="fill-gray-400 text-[12px]">
													extract the text
												</text>
												<text x="295" y="175" textAnchor="middle" className="fill-gray-400 text-[12px]">
													identify the file context
												</text>
											</g>

											{/* Storage Layer */}
											<g>
												<rect x="20" y="220" width="170" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="210" y="220" width="170" height="30" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="240" textAnchor="middle" className="fill-gray-400 text-[12px]">
													get prompt instructions
												</text>
												<text x="295" y="240" textAnchor="middle" className="fill-gray-400 text-[12px]">
													find the keys

												</text>
											</g>

											{/* API Layer */}
											<g>
												<rect x="20" y="270" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="290" textAnchor="middle" className="fill-gray-400 text-[12px]">
													return the values
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="75" y1="50" x2="75" y2="80" />
												<line x1="200" y1="50" x2="200" y2="80" />
												<line x1="325" y1="50" x2="325" y2="80" />
												<line x1="200" y1="120" x2="200" y2="150" />
												<line x1="105" y1="190" x2="105" y2="220" />
												<line x1="295" y1="190" x2="295" y2="220" />
												<line x1="200" y1="250" x2="200" y2="270" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Product Search System</h3>
										<p className="text-gray-400">
										A scalable ML-powered search engine that transforms raw product names into high-dimensional embeddings using text-embedding-ada, stores them efficiently, and retrieves relevant matches using vector similarity with Azure Cognitive Search and FAISS.										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">BackEnd Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Text Embedding with text-embedding-ada</li>
												<li>• Azure Cognitive Search Integration</li>
												<li>• FAISS Indexing</li>
												<li>• File I/O with Dynamic Embedding Generation</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Performance Metrics</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• 98%+ Semantic Search Precision</li>
											<li>• Sub-second Query Response</li>
											<li>• Sub-300ms Retrieval Latency</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">Data Flow Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Data Sources */}
											<g>
												<rect x="20" y="20" width="110" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="145" y="20" width="110" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="270" y="20" width="110" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="75" y="40" textAnchor="middle" className="fill-gray-400 text-[12px]">
													 Input File  
												</text>
												<text x="200" y="40" textAnchor="middle" className="fill-gray-400 text-[12px]">
													s3
												</text>
												<text x="325" y="40" textAnchor="middle" className="fill-gray-400 text-[12px]">
												event trigger
												</text>
											</g>

											{/* Event Processing */}
											<g>
												<rect x="20" y="80" width="360" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="200" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													 Generate Embeddings
												</text>
											</g>

											{/* Processing Layer */}
											<g>
												<rect x="20" y="150" width="170" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<rect x="210" y="150" width="170" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="105" y="175" textAnchor="middle" className="fill-gray-400 text-[12px]">
													FAISS + Cognitive 
													</text>
												<text x="295" y="175" textAnchor="middle" className="fill-gray-400 text-[12px]">
													 Product Query
												</text>
											</g>

											{/* Storage Layer */}
											<g>
												<rect x="20" y="220" width="170" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="210" y="220" width="170" height="30" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="240" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Similarity Search 
												</text>
												<text x="295" y="240" textAnchor="middle" className="fill-gray-400 text-[12px]">
													 k=3

												</text>
											</g>

											{/* API Layer */}
											<g>
												<rect x="20" y="270" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="290" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Response to API 
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="75" y1="50" x2="75" y2="80" />
												<line x1="200" y1="50" x2="200" y2="80" />
												<line x1="325" y1="50" x2="325" y2="80" />
												<line x1="200" y1="120" x2="200" y2="150" />
												<line x1="105" y1="190" x2="105" y2="220" />
												<line x1="295" y1="190" x2="295" y2="220" />
												<line x1="200" y1="250" x2="200" y2="270" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
						</motion.div>


				</div>
			</div>
		</section>
	);
}

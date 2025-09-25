// AIBridgeGap Demo Scripts

// Demo configurations and content
const demoConfigurations = {
    'customer-support': {
        title: 'Customer Support Automation Demo',
        content: `
            <div class="demo-interface">
                <div class="demo-step active" data-step="1">
                    <h4>Step 1: Incoming Support Ticket</h4>
                    <div class="mock-email">
                        <div class="email-header">
                            <span class="from">From: customer@example.com</span>
                            <span class="subject">Subject: Problem with billing</span>
                        </div>
                        <div class="email-body">
                            I've been charged twice for my subscription this month. Can you help me resolve this issue?
                        </div>
                    </div>
                    <button class="demo-next-btn" onclick="nextDemoStep('customer-support', 2)">Analyze with AI →</button>
                </div>
                
                <div class="demo-step" data-step="2">
                    <h4>Step 2: AI Analysis & Categorization</h4>
                    <div class="ai-analysis">
                        <div class="analysis-item">
                            <span class="label">Category:</span>
                            <span class="value billing">Billing Issue</span>
                        </div>
                        <div class="analysis-item">
                            <span class="label">Priority:</span>
                            <span class="value high">High Priority</span>
                        </div>
                        <div class="analysis-item">
                            <span class="label">Sentiment:</span>
                            <span class="value neutral">Neutral</span>
                        </div>
                        <div class="analysis-item">
                            <span class="label">Suggested Team:</span>
                            <span class="value">Billing Department</span>
                        </div>
                    </div>
                    <button class="demo-next-btn" onclick="nextDemoStep('customer-support', 3)">Route Ticket →</button>
                </div>
                
                <div class="demo-step" data-step="3">
                    <h4>Step 3: Automatic Routing & Response</h4>
                    <div class="routing-result">
                        <div class="assigned-to">
                            <strong>Assigned to:</strong> Sarah Chen - Billing Specialist<br>
                            <strong>Response Time:</strong> < 2 hours<br>
                            <strong>Auto-Response Sent:</strong> ✓
                        </div>
                        <div class="auto-response">
                            <h5>Automatic Customer Response:</h5>
                            <p>"Hi there! We've received your billing inquiry and it's been assigned to our billing specialist. You can expect a response within 2 hours. Reference #: BS-2024-001"</p>
                        </div>
                    </div>
                    <button class="demo-next-btn" onclick="resetDemo('customer-support')">Try Again</button>
                </div>
            </div>
        `
    },
    
    'invoice-processing': {
        title: 'Invoice Processing Automation Demo',
        content: `
            <div class="demo-interface">
                <div class="demo-step active" data-step="1">
                    <h4>Step 1: Upload Invoice</h4>
                    <div class="upload-area">
                        <div class="invoice-preview">
                            <img src="images/demo-invoice-sample.jpg" alt="Sample invoice" style="width: 100%; max-width: 300px; border: 1px solid #ccc;">
                        </div>
                        <button class="demo-next-btn" onclick="nextDemoStep('invoice-processing', 2)">Process with AI →</button>
                    </div>
                </div>
                
                <div class="demo-step" data-step="2">
                    <h4>Step 2: Data Extraction</h4>
                    <div class="extraction-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 0%"></div>
                        </div>
                        <div class="extraction-status">Extracting data...</div>
                    </div>
                    <div class="extracted-data" style="display: none;">
                        <div class="data-field">
                            <span class="field-label">Vendor:</span>
                            <span class="field-value">TechSupply Solutions</span>
                            <span class="confidence">99% confidence</span>
                        </div>
                        <div class="data-field">
                            <span class="field-label">Invoice #:</span>
                            <span class="field-value">INV-2024-001</span>
                            <span class="confidence">100% confidence</span>
                        </div>
                        <div class="data-field">
                            <span class="field-label">Amount:</span>
                            <span class="field-value">$1,250.00</span>
                            <span class="confidence">100% confidence</span>
                        </div>
                        <div class="data-field">
                            <span class="field-label">Due Date:</span>
                            <span class="field-value">2024-01-15</span>
                            <span class="confidence">98% confidence</span>
                        </div>
                    </div>
                </div>
                
                <div class="demo-step" data-step="3">
                    <h4>Step 3: Validation & Entry</h4>
                    <div class="validation-result">
                        <div class="validation-checks">
                            <div class="check-item">✓ Vendor verified in system</div>
                            <div class="check-item">✓ Amount within expected range</div>
                            <div class="check-item">✓ Due date is valid</div>
                            <div class="check-item">✓ Invoice number is unique</div>
                        </div>
                        <div class="entry-status">
                            <strong>Status:</strong> Automatically entered into QuickBooks<br>
                            <strong>Processing Time:</strong> 15 seconds<br>
                            <strong>Manual Review Required:</strong> No
                        </div>
                    </div>
                    <button class="demo-next-btn" onclick="resetDemo('invoice-processing')">Process Another</button>
                </div>
            </div>
        `
    },
    
    'lead-qualification': {
        title: 'Lead Qualification Demo',
        content: `
            <div class="demo-interface">
                <div class="demo-step active" data-step="1">
                    <h4>Step 1: New Lead Submission</h4>
                    <div class="lead-form">
                        <div class="form-field">
                            <strong>Name:</strong> Jennifer Walsh<br>
                            <strong>Company:</strong> Precision Logistics<br>
                            <strong>Email:</strong> j.walsh@precisionlog.com<br>
                            <strong>Phone:</strong> (555) 123-4567<br>
                            <strong>Message:</strong> "We're looking for AI solutions to optimize our delivery routes and reduce fuel costs."
                        </div>
                    </div>
                    <button class="demo-next-btn" onclick="nextDemoStep('lead-qualification', 2)">Qualify Lead →</button>
                </div>
                
                <div class="demo-step" data-step="2">
                    <h4>Step 2: AI Qualification Analysis</h4>
                    <div class="qualification-analysis">
                        <div class="scoring-grid">
                            <div class="score-item">
                                <span class="score-label">Company Size Score:</span>
                                <span class="score-value">85/100</span>
                                <div class="score-bar"><div class="score-fill" style="width: 85%"></div></div>
                            </div>
                            <div class="score-item">
                                <span class="score-label">Budget Indicator:</span>
                                <span class="score-value">90/100</span>
                                <div class="score-bar"><div class="score-fill" style="width: 90%"></div></div>
                            </div>
                            <div class="score-item">
                                <span class="score-label">Use Case Match:</span>
                                <span class="score-value">95/100</span>
                                <div class="score-bar"><div class="score-fill" style="width: 95%"></div></div>
                            </div>
                            <div class="score-item">
                                <span class="score-label">Urgency Level:</span>
                                <span class="score-value">75/100</span>
                                <div class="score-bar"><div class="score-fill" style="width: 75%"></div></div>
                            </div>
                        </div>
                        <div class="overall-score">
                            <strong>Overall Lead Score: 86/100 (Hot Lead)</strong>
                        </div>
                    </div>
                    <button class="demo-next-btn" onclick="nextDemoStep('lead-qualification', 3)">Assign & Notify →</button>
                </div>
                
                <div class="demo-step" data-step="3">
                    <h4>Step 3: Automatic Assignment & Follow-up</h4>
                    <div class="assignment-result">
                        <div class="assigned-rep">
                            <strong>Assigned to:</strong> Michael Rodriguez (Logistics Specialist)<br>
                            <strong>Reason:</strong> Best match for logistics industry experience<br>
                            <strong>Notification Sent:</strong> ✓ Email, ✓ Slack, ✓ CRM Update
                        </div>
                        <div class="suggested-actions">
                            <h5>AI-Suggested Next Steps:</h5>
                            <ul>
                                <li>Schedule demo within 24 hours</li>
                                <li>Prepare route optimization case study</li>
                                <li>Research company's current logistics challenges</li>
                                <li>Follow up if no response within 2 days</li>
                            </ul>
                        </div>
                    </div>
                    <button class="demo-next-btn" onclick="resetDemo('lead-qualification')">Try Another Lead</button>
                </div>
            </div>
        `
    },
    
    'report-generation': {
        title: 'Automated Report Generation Demo',
        content: `
            <div class="demo-interface">
                <div class="demo-step active" data-step="1">
                    <h4>Step 1: Data Collection</h4>
                    <div class="data-sources">
                        <div class="source-item">
                            <span class="source-name">📊 Sales CRM</span>
                            <span class="source-status connected">Connected</span>
                        </div>
                        <div class="source-item">
                            <span class="source-name">📈 Google Analytics</span>
                            <span class="source-status connected">Connected</span>
                        </div>
                        <div class="source-item">
                            <span class="source-name">💰 Accounting Software</span>
                            <span class="source-status connected">Connected</span>
                        </div>
                        <div class="source-item">
                            <span class="source-name">📧 Email Marketing</span>
                            <span class="source-status connected">Connected</span>
                        </div>
                    </div>
                    <button class="demo-next-btn" onclick="nextDemoStep('report-generation', 2)">Generate Report →</button>
                </div>
                
                <div class="demo-step" data-step="2">
                    <h4>Step 2: AI Analysis & Report Creation</h4>
                    <div class="generation-progress">
                        <div class="progress-steps">
                            <div class="step-item completed">✓ Data collected</div>
                            <div class="step-item active">📊 Analyzing trends</div>
                            <div class="step-item">📝 Generating insights</div>
                            <div class="step-item">📄 Creating report</div>
                        </div>
                    </div>
                    <div class="insights-preview" style="display: none;">
                        <h5>Key Insights Discovered:</h5>
                        <ul>
                            <li>Sales increased 23% vs last month</li>
                            <li>Website traffic up 45% from organic search</li>
                            <li>Customer acquisition cost decreased by 12%</li>
                            <li>Email open rates improved to 28.5%</li>
                        </ul>
                    </div>
                </div>
                
                <div class="demo-step" data-step="3">
                    <h4>Step 3: Completed Report</h4>
                    <div class="report-preview">
                        <div class="report-header">
                            <h5>📋 Monthly Business Report - December 2024</h5>
                            <span class="generated-time">Generated: 2024-12-28 09:00 AM</span>
                        </div>
                        <div class="report-summary">
                            <div class="metric">
                                <span class="metric-label">Revenue</span>
                                <span class="metric-value">$125,000</span>
                                <span class="metric-change positive">↗ +23%</span>
                            </div>
                            <div class="metric">
                                <span class="metric-label">New Leads</span>
                                <span class="metric-value">147</span>
                                <span class="metric-change positive">↗ +45%</span>
                            </div>
                            <div class="metric">
                                <span class="metric-label">Conversion Rate</span>
                                <span class="metric-value">18.2%</span>
                                <span class="metric-change positive">↗ +3.1%</span>
                            </div>
                        </div>
                        <div class="report-actions">
                            <button class="action-btn">📧 Email Report</button>
                            <button class="action-btn">💾 Save to Drive</button>
                            <button class="action-btn">📊 View Dashboard</button>
                        </div>
                    </div>
                    <button class="demo-next-btn" onclick="resetDemo('report-generation')">Generate New Report</button>
                </div>
            </div>
        `
    },
    
    'email-marketing': {
        title: 'Smart Email Marketing Demo',
        content: `
            <div class="demo-interface">
                <div class="demo-step active" data-step="1">
                    <h4>Step 1: Campaign Setup</h4>
                    <div class="campaign-setup">
                        <div class="setup-field">
                            <strong>Campaign Type:</strong> Product Launch<br>
                            <strong>Target Audience:</strong> Previous customers (2,500 contacts)<br>
                            <strong>Goal:</strong> Drive sales for new AI consulting package<br>
                            <strong>Timeline:</strong> Send immediately
                        </div>
                    </div>
                    <button class="demo-next-btn" onclick="nextDemoStep('email-marketing', 2)">Optimize with AI →</button>
                </div>
                
                <div class="demo-step" data-step="2">
                    <h4>Step 2: AI Optimization</h4>
                    <div class="optimization-process">
                        <div class="optimization-item">
                            <span class="opt-label">Subject Line:</span>
                            <span class="opt-value">"🚀 New AI Package: Save 40% on Automation" (89% open rate predicted)</span>
                        </div>
                        <div class="optimization-item">
                            <span class="opt-label">Send Time:</span>
                            <span class="opt-value">Tuesday 10:15 AM (optimal for your audience)</span>
                        </div>
                        <div class="optimization-item">
                            <span class="opt-label">Personalization:</span>
                            <span class="opt-value">2,500 unique variations based on customer data</span>
                        </div>
                        <div class="optimization-item">
                            <span class="opt-label">Content Optimization:</span>
                            <span class="opt-value">A/B testing 3 different call-to-action buttons</span>
                        </div>
                    </div>
                    <button class="demo-next-btn" onclick="nextDemoStep('email-marketing', 3)">Send Campaign →</button>
                </div>
                
                <div class="demo-step" data-step="3">
                    <h4>Step 3: Real-Time Results</h4>
                    <div class="campaign-results">
                        <div class="results-grid">
                            <div class="result-metric">
                                <span class="metric-number">87.2%</span>
                                <span class="metric-label">Open Rate</span>
                                <span class="metric-benchmark">vs 22% industry avg</span>
                            </div>
                            <div class="result-metric">
                                <span class="metric-number">34.5%</span>
                                <span class="metric-label">Click Rate</span>
                                <span class="metric-benchmark">vs 3.2% industry avg</span>
                            </div>
                            <div class="result-metric">
                                <span class="metric-number">12.8%</span>
                                <span class="metric-label">Conversion Rate</span>
                                <span class="metric-benchmark">vs 1.8% industry avg</span>
                            </div>
                            <div class="result-metric">
                                <span class="metric-number">$28,400</span>
                                <span class="metric-label">Revenue Generated</span>
                                <span class="metric-benchmark">ROI: 1,420%</span>
                            </div>
                        </div>
                        <div class="next-actions">
                            <h5>AI Recommended Next Steps:</h5>
                            <ul>
                                <li>Follow up with non-openers in 3 days</li>
                                <li>Send thank you email to purchasers</li>
                                <li>Create retargeting campaign for clicked but didn't buy</li>
                            </ul>
                        </div>
                    </div>
                    <button class="demo-next-btn" onclick="resetDemo('email-marketing')">Create New Campaign</button>
                </div>
            </div>
        `
    },
    
    'inventory-management': {
        title: 'Predictive Inventory Management Demo',
        content: `
            <div class="demo-interface">
                <div class="demo-step active" data-step="1">
                    <h4>Step 1: Current Inventory Status</h4>
                    <div class="inventory-grid">
                        <div class="inventory-item">
                            <span class="item-name">AI Consultation Hours</span>
                            <span class="item-current">45 hours available</span>
                            <span class="item-status warning">Running Low</span>
                        </div>
                        <div class="inventory-item">
                            <span class="item-name">Training Licenses</span>
                            <span class="item-current">12 licenses</span>
                            <span class="item-status good">Good Stock</span>
                        </div>
                        <div class="inventory-item">
                            <span class="item-name">Custom Development Slots</span>
                            <span class="item-current">3 slots</span>
                            <span class="item-status critical">Critical</span>
                        </div>
                    </div>
                    <button class="demo-next-btn" onclick="nextDemoStep('inventory-management', 2)">Analyze Demand →</button>
                </div>
                
                <div class="demo-step" data-step="2">
                    <h4>Step 2: AI Demand Prediction</h4>
                    <div class="prediction-analysis">
                        <div class="prediction-chart">
                            <h5>📈 Demand Forecast (Next 30 Days)</h5>
                            <div class="chart-placeholder">
                                <div class="chart-bar" style="height: 60%">Week 1: 65 hours</div>
                                <div class="chart-bar" style="height: 80%">Week 2: 78 hours</div>
                                <div class="chart-bar" style="height: 95%">Week 3: 89 hours</div>
                                <div class="chart-bar" style="height: 70%">Week 4: 72 hours</div>
                            </div>
                        </div>
                        <div class="prediction-insights">
                            <h5>🔍 AI Insights:</h5>
                            <ul>
                                <li>Q1 spike expected due to new year planning</li>
                                <li>Training demand up 40% (holiday skills development)</li>
                                <li>Custom projects booking 3 weeks ahead</li>
                                <li>Competitor analysis suggests market growth</li>
                            </ul>
                        </div>
                    </div>
                    <button class="demo-next-btn" onclick="nextDemoStep('inventory-management', 3)">Generate Recommendations →</button>
                </div>
                
                <div class="demo-step" data-step="3">
                    <h4>Step 3: Automated Recommendations</h4>
                    <div class="recommendations">
                        <div class="recommendation-item urgent">
                            <span class="rec-icon">🚨</span>
                            <div class="rec-content">
                                <strong>Urgent Action Required</strong>
                                <p>Book 2 additional consultants for January to meet demand. Projected shortage of 34 hours without action.</p>
                                <button class="rec-action">Book Consultants</button>
                            </div>
                        </div>
                        <div class="recommendation-item moderate">
                            <span class="rec-icon">💡</span>
                            <div class="rec-content">
                                <strong>Capacity Optimization</strong>
                                <p>Increase training license pool by 8 units. ROI projected at 340% based on current demand.</p>
                                <button class="rec-action">Purchase Licenses</button>
                            </div>
                        </div>
                        <div class="recommendation-item info">
                            <span class="rec-icon">📊</span>
                            <div class="rec-content">
                                <strong>Revenue Opportunity</strong>
                                <p>Premium pricing available for January slots. Increase rates by 15% for new bookings.</p>
                                <button class="rec-action">Update Pricing</button>
                            </div>
                        </div>
                    </div>
                    <button class="demo-next-btn" onclick="resetDemo('inventory-management')">Run New Analysis</button>
                </div>
            </div>
        `
    }
};

// Demo modal functions
function openDemo(demoType) {
    const modal = document.getElementById('demo-modal');
    const modalTitle = document.getElementById('modal-title');
    const demoContainer = document.getElementById('demo-container');
    
    if (!modal || !modalTitle || !demoContainer) {
        console.error('Demo modal elements not found');
        return;
    }
    
    const config = demoConfigurations[demoType];
    if (!config) {
        console.error('Demo configuration not found for:', demoType);
        return;
    }
    
    // Set modal content
    modalTitle.textContent = config.title;
    demoContainer.innerHTML = config.content;
    
    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Initialize demo-specific functionality
    initializeDemoInterface(demoType);
}

function closeDemo() {
    const modal = document.getElementById('demo-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function nextDemoStep(demoType, stepNumber) {
    const currentStep = document.querySelector('.demo-step.active');
    const nextStep = document.querySelector(`.demo-step[data-step="${stepNumber}"]`);
    
    if (currentStep) {
        currentStep.classList.remove('active');
    }
    
    if (nextStep) {
        nextStep.classList.add('active');
        
        // Special animations for specific demos
        if (demoType === 'invoice-processing' && stepNumber === 2) {
            animateInvoiceProcessing();
        } else if (demoType === 'report-generation' && stepNumber === 2) {
            animateReportGeneration();
        }
    }
}

function resetDemo(demoType) {
    const allSteps = document.querySelectorAll('.demo-step');
    allSteps.forEach(step => step.classList.remove('active'));
    
    const firstStep = document.querySelector('.demo-step[data-step="1"]');
    if (firstStep) {
        firstStep.classList.add('active');
    }
    
    // Reset any demo-specific states
    resetDemoStates(demoType);
}

function initializeDemoInterface(demoType) {
    // Add demo-specific CSS
    if (!document.getElementById('demo-styles')) {
        const demoStyles = document.createElement('style');
        demoStyles.id = 'demo-styles';
        demoStyles.textContent = `
            .demo-interface {
                max-width: 100%;
                font-family: inherit;
            }
            
            .demo-step {
                display: none;
                animation: fadeInUp 0.3s ease-out;
            }
            
            .demo-step.active {
                display: block;
            }
            
            .demo-step h4 {
                color: var(--primary-blue);
                margin-bottom: 1rem;
                font-size: 1.25rem;
            }
            
            .mock-email {
                background: #f8f9fa;
                border: 1px solid #e9ecef;
                border-radius: 8px;
                padding: 1rem;
                margin-bottom: 1rem;
            }
            
            .email-header {
                border-bottom: 1px solid #e9ecef;
                padding-bottom: 0.5rem;
                margin-bottom: 0.5rem;
                font-size: 0.9rem;
            }
            
            .email-body {
                color: #495057;
                line-height: 1.5;
            }
            
            .ai-analysis {
                display: grid;
                gap: 0.75rem;
                margin-bottom: 1rem;
            }
            
            .analysis-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.75rem;
                background: #f8f9fa;
                border-radius: 6px;
                border-left: 4px solid var(--primary-blue);
            }
            
            .label {
                font-weight: 600;
                color: #495057;
            }
            
            .value {
                font-weight: 500;
            }
            
            .value.billing { color: #e74c3c; }
            .value.high { color: #e67e22; }
            .value.neutral { color: #3498db; }
            
            .demo-next-btn {
                background: var(--primary-blue);
                color: white;
                border: none;
                padding: 0.75rem 1.5rem;
                border-radius: 6px;
                cursor: pointer;
                font-weight: 500;
                transition: all 0.2s;
                width: 100%;
                margin-top: 1rem;
            }
            
            .demo-next-btn:hover {
                background: var(--primary-blue-dark);
                transform: translateY(-1px);
            }
            
            .progress-bar {
                width: 100%;
                height: 8px;
                background: #e9ecef;
                border-radius: 4px;
                overflow: hidden;
                margin-bottom: 1rem;
            }
            
            .progress-fill {
                height: 100%;
                background: linear-gradient(90deg, var(--primary-blue), var(--accent-cyan));
                transition: width 1s ease-out;
            }
            
            .extracted-data {
                display: grid;
                gap: 0.75rem;
            }
            
            .data-field {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.75rem;
                background: #f8f9fa;
                border-radius: 6px;
                border-left: 4px solid #28a745;
            }
            
            .field-label {
                font-weight: 600;
                color: #495057;
            }
            
            .field-value {
                font-weight: 500;
                color: #212529;
            }
            
            .confidence {
                font-size: 0.85rem;
                color: #28a745;
                font-weight: 500;
            }
            
            .scoring-grid {
                display: grid;
                gap: 1rem;
                margin-bottom: 1rem;
            }
            
            .score-item {
                display: grid;
                gap: 0.5rem;
            }
            
            .score-bar {
                height: 6px;
                background: #e9ecef;
                border-radius: 3px;
                overflow: hidden;
            }
            
            .score-fill {
                height: 100%;
                background: linear-gradient(90deg, var(--primary-blue), var(--accent-cyan));
                transition: width 1s ease-out;
            }
            
            .overall-score {
                text-align: center;
                padding: 1rem;
                background: linear-gradient(135deg, var(--primary-blue), var(--accent-cyan));
                color: white;
                border-radius: 8px;
                margin-bottom: 1rem;
            }
            
            .data-sources {
                display: grid;
                gap: 0.5rem;
                margin-bottom: 1rem;
            }
            
            .source-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.75rem;
                background: #f8f9fa;
                border-radius: 6px;
            }
            
            .source-status.connected {
                color: #28a745;
                font-weight: 500;
            }
            
            .progress-steps {
                display: grid;
                gap: 0.5rem;
                margin-bottom: 1rem;
            }
            
            .step-item {
                padding: 0.75rem;
                border-radius: 6px;
                transition: all 0.3s;
            }
            
            .step-item.completed {
                background: #d4edda;
                color: #155724;
            }
            
            .step-item.active {
                background: #cce7ff;
                color: #004085;
                animation: pulse 1s infinite;
            }
            
            .metric {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.75rem;
                background: #f8f9fa;
                border-radius: 6px;
                margin-bottom: 0.5rem;
            }
            
            .metric-change.positive {
                color: #28a745;
                font-weight: 600;
            }
            
            .recommendation-item {
                display: flex;
                gap: 1rem;
                padding: 1rem;
                border-radius: 8px;
                margin-bottom: 1rem;
            }
            
            .recommendation-item.urgent {
                background: #fff5f5;
                border-left: 4px solid #e53e3e;
            }
            
            .recommendation-item.moderate {
                background: #fefcbf;
                border-left: 4px solid #d69e2e;
            }
            
            .recommendation-item.info {
                background: #ebf8ff;
                border-left: 4px solid #3182ce;
            }
            
            .rec-icon {
                font-size: 1.5rem;
                flex-shrink: 0;
            }
            
            .rec-content {
                flex: 1;
            }
            
            .rec-action {
                background: var(--primary-blue);
                color: white;
                border: none;
                padding: 0.5rem 1rem;
                border-radius: 4px;
                cursor: pointer;
                font-size: 0.9rem;
                margin-top: 0.5rem;
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.7; }
            }
            
            @media (max-width: 768px) {
                .analysis-item,
                .data-field,
                .metric {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 0.5rem;
                }
            }
        `;
        document.head.appendChild(demoStyles);
    }
}

function animateInvoiceProcessing() {
    setTimeout(() => {
        const progressFill = document.querySelector('.progress-fill');
        const extractionStatus = document.querySelector('.extraction-status');
        const extractedData = document.querySelector('.extracted-data');
        
        if (progressFill && extractionStatus) {
            let progress = 0;
            const interval = setInterval(() => {
                progress += 10;
                progressFill.style.width = progress + '%';
                
                if (progress >= 100) {
                    clearInterval(interval);
                    extractionStatus.textContent = 'Extraction complete!';
                    if (extractedData) {
                        extractedData.style.display = 'grid';
                        setTimeout(() => {
                            nextDemoStep('invoice-processing', 3);
                        }, 1500);
                    }
                }
            }, 200);
        }
    }, 500);
}

function animateReportGeneration() {
    setTimeout(() => {
        const steps = document.querySelectorAll('.step-item');
        let currentStep = 1;
        
        const interval = setInterval(() => {
            if (currentStep < steps.length) {
                steps[currentStep - 1].classList.remove('active');
                steps[currentStep - 1].classList.add('completed');
                steps[currentStep].classList.add('active');
                currentStep++;
            } else {
                clearInterval(interval);
                steps[steps.length - 1].classList.remove('active');
                steps[steps.length - 1].classList.add('completed');
                
                const insightsPreview = document.querySelector('.insights-preview');
                if (insightsPreview) {
                    insightsPreview.style.display = 'block';
                    setTimeout(() => {
                        nextDemoStep('report-generation', 3);
                    }, 2000);
                }
            }
        }, 1500);
    }, 500);
}

function resetDemoStates(demoType) {
    // Reset progress bars
    const progressFills = document.querySelectorAll('.progress-fill');
    progressFills.forEach(fill => {
        fill.style.width = '0%';
    });
    
    // Reset step items
    const stepItems = document.querySelectorAll('.step-item');
    stepItems.forEach((item, index) => {
        item.classList.remove('active', 'completed');
        if (index === 1) { // Second item should be active initially
            item.classList.add('active');
        } else if (index === 0) { // First item should be completed
            item.classList.add('completed');
        }
    });
    
    // Hide extracted data
    const extractedData = document.querySelector('.extracted-data');
    if (extractedData) {
        extractedData.style.display = 'none';
    }
    
    // Reset extraction status
    const extractionStatus = document.querySelector('.extraction-status');
    if (extractionStatus) {
        extractionStatus.textContent = 'Extracting data...';
    }
    
    // Hide insights preview
    const insightsPreview = document.querySelector('.insights-preview');
    if (insightsPreview) {
        insightsPreview.style.display = 'none';
    }
}

// Initialize demo functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to demo buttons
    const demoButtons = document.querySelectorAll('[onclick*="openDemo"]');
    demoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const onclickAttr = this.getAttribute('onclick');
            const demoType = onclickAttr.match(/'([^']+)'/)[1];
            openDemo(demoType);
        });
    });
    
    // Add keyboard navigation for demo modals
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('demo-modal');
        if (modal && modal.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeDemo();
            }
        }
    });
});

// Export functions for global access
window.openDemo = openDemo;
window.closeDemo = closeDemo;
window.nextDemoStep = nextDemoStep;
window.resetDemo = resetDemo;
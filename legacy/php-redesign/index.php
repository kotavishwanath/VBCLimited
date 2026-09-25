<?php
require __DIR__ . '/includes/init.php';
require __DIR__ . '/includes/contact-handler.php';

$status = $_SESSION['contact_status'] ?? null;
$errors = $_SESSION['contact_errors'] ?? [];
$old    = $_SESSION['contact_old'] ?? [];
unset($_SESSION['contact_status'], $_SESSION['contact_errors'], $_SESSION['contact_old']);

$activePage = 'home';

$capabilities = [
    'Permanent Recruitment', 'Contract Staffing', 'Mobile Apps', 'Web Design & Hosting',
    'Cloud Accounting', 'Inventory Software', 'Custom Applications', 'Test Automation',
    'Selenium', 'Performance Testing', 'Security Testing', 'Continuous Integration',
];

$tafFeatures = [
    ['Smart tagging', 'Smart tagging of test cases helps selection for execution based on “release objectives”.'],
    ['Continuous integration', 'Continuous integration testing with leading CI server tools and multiple test data sources.'],
    ['Broad compatibility', 'Compatibility with leading ERPs, packaged solutions, web, mobile and thick-client applications.'],
    ['Reusable keywords', 'A large repository of keywords for a common, scalable knowledge base that promotes reuse of functional libraries.'],
    ['Live dashboards', 'Dashboards with in-depth visibility into project status, test execution results and analysis reports.'],
    ['Single-point maintenance', 'Reduces complex operating costs and overall testing time, and brings about a quicker ROI.'],
    ['Full regression', 'Run comprehensive regression tests for major and minor releases, improving the overall quality of applications.'],
    ['Open integrations', 'Integration with open and commercial tools makes validating complex business processes easy.'],
];

require __DIR__ . '/includes/head.php';
require __DIR__ . '/includes/nav.php';
?>

<main id="main">

    <!-- Hero -->
    <section class="hero" id="top">
        <canvas class="hero-canvas" data-network aria-hidden="true"></canvas>
        <div class="hero-glow hero-glow--a" aria-hidden="true"></div>
        <div class="hero-glow hero-glow--b" aria-hidden="true"></div>
        <div class="hero-grid-bg" aria-hidden="true"></div>

        <div class="container hero-layout">
            <div class="hero-copy">
                <span class="eyebrow" data-reveal><span class="pulse"></span>IT Staffing &amp; Solutions &middot; UK &amp; India</span>
                <h1 class="display" data-reveal style="--d:.08s">
                    Smart people.<br>
                    <span class="gradient-text">Smarter solutions.</span>
                </h1>
                <p class="lead" data-reveal style="--d:.16s">
                    We are a dedicated team of professionals with a combined experience &mdash; connecting businesses with exceptional IT talent, and building the software, apps and quality frameworks that move them forward.
                </p>
                <div class="hero-actions" data-reveal style="--d:.24s">
                    <a href="#contact" class="btn btn-primary">Hire talent <svg class="icon"><use href="#i-arrow"/></svg></a>
                    <a href="career.php" class="btn btn-ghost">Explore careers</a>
                </div>
                <ul class="hero-points" data-reveal style="--d:.32s">
                    <li><svg class="icon"><use href="#i-check"/></svg>Permanent &amp; contract staffing</li>
                    <li><svg class="icon"><use href="#i-check"/></svg>In-house development teams</li>
                    <li><svg class="icon"><use href="#i-check"/></svg>End-to-end QA</li>
                </ul>
            </div>

            <div class="hero-visual" aria-hidden="true" data-reveal style="--d:.2s">
                <div class="orbit">
                    <div class="orbit-ring orbit-ring--1"></div>
                    <div class="orbit-ring orbit-ring--2"></div>
                    <div class="orbit-ring orbit-ring--3"></div>
                    <div class="orbit-core"><img src="img/vbc.png" alt="" width="160" height="160"></div>
                    <div class="chip chip--1"><svg class="icon"><use href="#i-users"/></svg>Recruitment</div>
                    <div class="chip chip--2"><svg class="icon"><use href="#i-code"/></svg>Software</div>
                    <div class="chip chip--3"><svg class="icon"><use href="#i-phone-app"/></svg>Mobile Apps</div>
                    <div class="chip chip--4"><svg class="icon"><use href="#i-shield"/></svg>Quality Assurance</div>
                    <div class="chip chip--5"><svg class="icon"><use href="#i-layout"/></svg>Web &amp; Hosting</div>
                </div>
            </div>
        </div>

        <a href="#about" class="scroll-hint" aria-label="Scroll to about section"><span></span></a>
    </section>

    <!-- Marquee -->
    <div class="marquee" aria-label="Our capabilities">
        <div class="marquee-track">
            <?php for ($i = 0; $i < 2; $i++): ?>
                <ul <?= $i ? 'aria-hidden="true"' : '' ?>>
                    <?php foreach ($capabilities as $cap): ?>
                        <li><svg class="icon"><use href="#i-sparkle"/></svg><?= e($cap) ?></li>
                    <?php endforeach; ?>
                </ul>
            <?php endfor; ?>
        </div>
    </div>

    <!-- About -->
    <section class="section" id="about">
        <div class="container about-layout">
            <div class="about-copy">
                <span class="kicker" data-reveal>About us</span>
                <h2 class="h2" data-reveal>A vibrant, growing company built on <span class="gradient-text">people and process.</span></h2>
                <p data-reveal>VBC is the best in providing IT services and solutions. Over the years we have become a leader in the realm of recruitment consulting, and the reckoning service provider for staffing for our valued clients. VBC is a vibrant and growing company with a nationwide footprint and employees throughout the country.</p>
                <p data-reveal>We deliver business value through a combination of process excellence, a quality framework, service delivery and innovation to clients across different vertical industries &mdash; combining technological skills, domain expertise, process focus and a commitment to long-term client relationships.</p>
            </div>

            <div class="pillars">
                <article class="pillar" data-reveal>
                    <span class="pillar-icon"><svg class="icon"><use href="#i-layers"/></svg></span>
                    <h3>Process excellence</h3>
                    <p>Repeatable, measurable delivery on every engagement.</p>
                </article>
                <article class="pillar" data-reveal style="--d:.08s">
                    <span class="pillar-icon"><svg class="icon"><use href="#i-award"/></svg></span>
                    <h3>Quality framework</h3>
                    <p>Quality built in from the first requirement to release.</p>
                </article>
                <article class="pillar" data-reveal style="--d:.16s">
                    <span class="pillar-icon"><svg class="icon"><use href="#i-target"/></svg></span>
                    <h3>Service delivery</h3>
                    <p>Domain expertise focused on your business objectives.</p>
                </article>
                <article class="pillar" data-reveal style="--d:.24s">
                    <span class="pillar-icon"><svg class="icon"><use href="#i-zap"/></svg></span>
                    <h3>Innovation</h3>
                    <p>Advanced technologies that keep our teams ahead.</p>
                </article>
            </div>
        </div>
    </section>

    <!-- Quote -->
    <section class="quote-section">
        <div class="container">
            <figure class="quote" data-reveal>
                <blockquote>
                    <p>It doesn&rsquo;t make sense to hire smart people and then tell them what to do; <span class="gradient-text">we hire smart people so they can tell us what to do.</span></p>
                </blockquote>
                <figcaption>&mdash; Steve Jobs</figcaption>
            </figure>
        </div>
    </section>

    <!-- Services -->
    <section class="section" id="services">
        <div class="container">
            <div class="section-head">
                <span class="kicker" data-reveal>What we do</span>
                <h2 class="h2" data-reveal>Talent and technology, <span class="gradient-text">under one roof.</span></h2>
                <p data-reveal>From finding the right people to building and testing the right software &mdash; our services cover the full lifecycle of your IT needs.</p>
            </div>

            <div class="bento">
                <article class="card card--wide" data-reveal data-spotlight>
                    <span class="card-icon"><svg class="icon"><use href="#i-users"/></svg></span>
                    <h3>Recruitment Services</h3>
                    <p>As the employer of choice for some of the world&rsquo;s leading organisations, VBC is a key player in providing a comprehensive array of workforce solutions, including consulting and recruitment on a permanent, temporary-to-hire and temporary placement basis.</p>
                    <div class="models">
                        <div><strong>Permanent</strong><span>Long-term hires who fit your culture and roadmap.</span></div>
                        <div><strong>Temp-to-hire</strong><span>Evaluate talent on the job before committing.</span></div>
                        <div><strong>Temporary</strong><span>Scale quickly for projects and specialist needs.</span></div>
                    </div>
                </article>

                <article class="card" data-reveal data-spotlight style="--d:.08s">
                    <span class="card-icon"><svg class="icon"><use href="#i-network"/></svg></span>
                    <h3>Professional Manpower Solution</h3>
                    <p>VB Consulting Service (UK) Pvt. Ltd. was established in London with the core motto of understanding human values &mdash; supporting clients to achieve their business objectives in every sphere of business operations.</p>
                </article>

                <article class="card" data-reveal data-spotlight>
                    <span class="card-icon"><svg class="icon"><use href="#i-phone-app"/></svg></span>
                    <h3>Mobile Apps Development</h3>
                    <p>Your enterprise may be dealing with hundreds of applications. We streamline application management for maximum efficiency and control &mdash; maintenance, re-engineering, migration and testing.</p>
                </article>

                <article class="card" data-reveal data-spotlight style="--d:.08s">
                    <span class="card-icon"><svg class="icon"><use href="#i-layout"/></svg></span>
                    <h3>Web Designing &amp; Hosting</h3>
                    <p>Intuitive, effective user interfaces help organisations succeed early. We identify, select and implement the right navigation models to build experiences that suit your business.</p>
                </article>

                <article class="card" data-reveal data-spotlight style="--d:.16s">
                    <span class="card-icon"><svg class="icon"><use href="#i-code"/></svg></span>
                    <h3>Software Development</h3>
                    <ul class="check-list">
                        <li>Inventory Software</li>
                        <li>Accounting Software &mdash; Cloud Accounting</li>
                        <li>Client-Driven Solutions</li>
                        <li>Performance Engineering &amp; Project Risk Estimation</li>
                        <li>Custom Application Development</li>
                    </ul>
                </article>

                <article class="card card--full" data-reveal data-spotlight>
                    <div class="card-split">
                        <div>
                            <span class="card-icon"><svg class="icon"><use href="#i-shield"/></svg></span>
                            <h3>Quality Assurance</h3>
                            <p>A complete testing practice that protects your releases, your users and your reputation.</p>
                        </div>
                        <ul class="tags">
                            <li>Functional Testing</li>
                            <li>Test Automation</li>
                            <li>Compatibility Testing</li>
                            <li>Performance Testing</li>
                            <li>Regression Testing</li>
                            <li>Security Testing</li>
                            <li>Selenium Testing</li>
                            <li>Testing Center of Excellence</li>
                        </ul>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <!-- Test Automation Framework -->
    <section class="section section--alt" id="automation">
        <div class="container taf-layout">
            <div class="taf-intro">
                <span class="kicker" data-reveal>Test Automation Framework</span>
                <h2 class="h2" data-reveal>Automation that <span class="gradient-text">pays for itself.</span></h2>
                <p data-reveal>TAF&rsquo;s support for extensibility, service virtualisation, portability, forward integration and just-in-time reporting adds value across the entire testing lifecycle.</p>
                <div class="stat" data-reveal>
                    <span class="stat-value" data-count="50" data-suffix="%+">50%+</span>
                    <span class="stat-label">overall cost savings in automation design, execution cycle and maintenance</span>
                </div>
            </div>

            <ol class="taf-grid">
                <?php foreach ($tafFeatures as $i => [$title, $text]): ?>
                    <li class="taf-item" data-reveal style="--d:<?= number_format(($i % 2) * 0.08, 2) ?>s">
                        <span class="taf-num"><?= str_pad((string) ($i + 1), 2, '0', STR_PAD_LEFT) ?></span>
                        <h3><?= e($title) ?></h3>
                        <p><?= e($text) ?></p>
                    </li>
                <?php endforeach; ?>
            </ol>
        </div>
    </section>

    <!-- CTA -->
    <section class="section cta-section">
        <div class="container">
            <div class="cta" data-reveal>
                <div class="cta-glow" aria-hidden="true"></div>
                <h2 class="h2">Ready to build a smarter team?</h2>
                <p>Tell us what you need &mdash; talent, technology or both &mdash; and we&rsquo;ll get back to you.</p>
                <div class="hero-actions">
                    <a href="#contact" class="btn btn-light">Start a conversation <svg class="icon"><use href="#i-arrow"/></svg></a>
                    <a href="career.php" class="btn btn-ghost">View open roles</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact -->
    <section class="section" id="contact">
        <div class="container contact-layout">
            <div class="contact-copy">
                <span class="kicker" data-reveal>Contact us</span>
                <h2 class="h2" data-reveal>Let&rsquo;s start a <span class="gradient-text">conversation.</span></h2>
                <p data-reveal>Looking to hire, or wish to be considered for employment in London? Send us a message and our Human Resources department will contact you after reviewing your information.</p>

                <ul class="contact-list">
                    <li data-reveal>
                        <span class="contact-icon"><svg class="icon"><use href="#i-pin"/></svg></span>
                        <div><small>Visit us</small><?= e(VBC_ADDRESS) ?></div>
                    </li>
                    <li data-reveal>
                        <span class="contact-icon"><svg class="icon"><use href="#i-phone"/></svg></span>
                        <div><small>Call us</small><a href="tel:<?= e(str_replace(' ', '', VBC_PHONE)) ?>"><?= e(VBC_PHONE) ?></a></div>
                    </li>
                    <li data-reveal>
                        <span class="contact-icon"><svg class="icon"><use href="#i-mail"/></svg></span>
                        <div><small>Email us</small><a href="mailto:<?= e(VBC_EMAIL) ?>"><?= e(VBC_EMAIL) ?></a></div>
                    </li>
                </ul>
            </div>

            <div class="form-card" data-reveal>
                <?php if ($status === 'sent'): ?>
                    <div class="alert alert--success" role="status">Thank you &mdash; your message has been sent. We&rsquo;ll be in touch soon.</div>
                <?php elseif ($status === 'failed'): ?>
                    <div class="alert alert--error" role="alert">Sorry, your message could not be sent. Please email us directly at <?= e(VBC_EMAIL) ?>.</div>
                <?php endif; ?>
                <?php if ($errors): ?>
                    <div class="alert alert--error" role="alert">
                        <ul><?php foreach ($errors as $err): ?><li><?= e($err) ?></li><?php endforeach; ?></ul>
                    </div>
                <?php endif; ?>

                <form method="post" action="index.php#contact" class="contact-form" novalidate data-form>
                    <input type="hidden" name="csrf" value="<?= e($_SESSION['csrf']) ?>">
                    <input type="hidden" name="save" value="1">
                    <div class="hp" aria-hidden="true">
                        <label for="website">Website</label>
                        <input type="text" id="website" name="website" tabindex="-1" autocomplete="off">
                    </div>

                    <div class="field-row">
                        <div class="field">
                            <input type="text" id="name" name="name" placeholder=" " required minlength="2" maxlength="100" autocomplete="name" value="<?= e($old['name'] ?? '') ?>">
                            <label for="name">Your name</label>
                        </div>
                        <div class="field">
                            <input type="email" id="email" name="email" placeholder=" " required maxlength="254" autocomplete="email" value="<?= e($old['email'] ?? '') ?>">
                            <label for="email">Your email</label>
                        </div>
                    </div>
                    <div class="field">
                        <input type="text" id="subject" name="subject" placeholder=" " required minlength="3" maxlength="150" value="<?= e($old['subject'] ?? '') ?>">
                        <label for="subject">Subject</label>
                    </div>
                    <div class="field">
                        <textarea id="message" name="message" rows="5" placeholder=" " required minlength="10" maxlength="5000"><?= e($old['message'] ?? '') ?></textarea>
                        <label for="message">How can we help?</label>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Send message <svg class="icon"><use href="#i-arrow"/></svg></button>
                </form>
            </div>
        </div>
    </section>

</main>

<?php require __DIR__ . '/includes/footer.php'; ?>

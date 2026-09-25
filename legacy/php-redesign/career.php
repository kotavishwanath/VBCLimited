<?php
require __DIR__ . '/includes/init.php';

$activePage = 'career';
$bodyClass  = 'page-career';
$pageTitle  = 'Careers — IT Technical Project Leader | VBC Limited';
$pageDescription = 'Join VBC Limited in Bedford. We are looking for a highly motivated IT Technical Project Leader to join our growing company.';

$jobTitle = 'IT Technical Project Leader';

$responsibilities = [
    'Maintaining and improving existing software.',
    'Line management and personal development of a team of highly skilled developers.',
    'Managing the delivery of multiple complex simultaneous system development projects from design through to release.',
    'Coordinate with all business and IT partners, analyse all business requirements and provide resolutions for all business and IT associate issues.',
    'Evaluate the IT architecture of the Guest Services Tablet app and Guest Registration on Tablet app, and develop required presentations and white papers for technical processes such as Database Design, User Interface Design, Test Case generation and programming.',
    'Design an effective technical architecture for the Guest Services Application, develop it effectively, assist in incorporating technologies such as Android, Xcode and web services into IT systems, and monitor development environments.',
    'Coordinate with all software vendors to investigate application issues and provide effective resolutions, and help team members evaluate technical processes while providing an effective interface with all vendor partners.',
    'Take responsibility for project planning and control utilising the XPO solutions team toolkit and reporting system ALM.',
    'Produce and maintain all system documentation including functional specifications, change requests, process mapping, training material and version control management.',
    'Work closely with the IT infrastructure team and outside contractors to assist in defining the infrastructure and hardware requirements design.',
    'Responsible for interface design and functional specification documentation.',
    'Liaise closely with client IT & logistics professionals, Clipper internal IT infrastructure and solutions teams, and software vendor technical staff.',
    'Capable of understanding and contributing to the technical solution from design through to code level.',
    'Work closely with Development Project Managers and Business Analysts to produce accurate delivery estimates and manage the transition from analysis through to design and delivery.',
    'Provide regular and effective progress updates, working closely with Development Project Managers to ensure the management of any delivery risks or issues.',
    'Define delivery phases of the project including activities, sub-activities and milestones, ensuring these are documented and used as the basis for the project event log, issues and risk log and any subsequent reporting.',
    'Coordinate collaboration with other departments and subcontractors; work closely with engineers to architect and develop the best technical design and approach.',
    'Instil best practices for software development and documentation, assure designs meet requirements, and deliver high-quality work on tight schedules.',
    'Ensure awareness, involvement and support from key stakeholders and participants by building strong relationships.',
];

$requirements = [
    'IT related degree preferred.',
    'Six Sigma Black Belt certification preferred.',
    'Experience in a Project Leader or Project Manager type position.',
    'IT related experience; previous management experience required.',
    'Proven Project Leader experience encompassing large, complex, mission-critical projects.',
    'Proven business analysis / design experience encompassing large, complex, mission-critical projects.',
    'Previous experience with large software development / implementation / client-server projects.',
    'Previous employment with a large software development organisation a plus.',
    'Prior software design and development experience preferred.',
];

$techStack = [
    '.NET', 'C#', 'ASP.NET MVC', 'Entity Framework', 'SQL Server', 'SSIS', 'TFS',
    'Continuous Integration', 'MSBuild', 'Unit Testing', 'Rhino Mocks', 'Lucene', 'Solr',
    'SQL Server Full Text Search', 'JavaScript', 'jQuery', 'Reflection', 'LINQ Providers',
    'Expression Trees', 'NServiceBus', 'MSMQ', 'RabbitMQ', 'WCF', 'NHibernate', 'NUnit',
    'Git', 'Rake', 'Visual Studio 2010/2012',
];

$applyHref = 'mailto:' . VBC_EMAIL . '?subject=' . rawurlencode('Application: ' . $jobTitle);

require __DIR__ . '/includes/head.php';
require __DIR__ . '/includes/nav.php';
?>

<main id="main">

    <section class="page-hero" id="top">
        <div class="hero-glow hero-glow--a" aria-hidden="true"></div>
        <div class="hero-glow hero-glow--b" aria-hidden="true"></div>
        <div class="hero-grid-bg" aria-hidden="true"></div>
        <div class="container">
            <span class="eyebrow" data-reveal><span class="pulse"></span>Careers at VBC</span>
            <h1 class="display display--sm" data-reveal style="--d:.08s">Do the best work <span class="gradient-text">of your career.</span></h1>
            <p class="lead" data-reveal style="--d:.16s">We hire smart people so they can tell us what to do. Explore our open roles and help us build what&rsquo;s next.</p>
        </div>
    </section>

    <section class="section section--tight">
        <div class="container job-layout">

            <article class="job">
                <header class="job-header" data-reveal>
                    <span class="badge">Permanent</span>
                    <h2 class="h2"><?= e($jobTitle) ?></h2>
                    <p>Versatile Business Consultants Ltd is looking for a highly motivated, business-orientated, customer-facing Project Leader who loves delivering to the highest standards, working with people, and wants to be part of our growing company.</p>
                </header>

                <div class="job-block" data-reveal>
                    <h3>Job responsibilities</h3>
                    <ul class="check-list check-list--lg">
                        <?php foreach ($responsibilities as $item): ?>
                            <li><?= e($item) ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>

                <div class="job-block" data-reveal>
                    <h3>Required skills &amp; experience</h3>
                    <ul class="check-list check-list--lg">
                        <?php foreach ($requirements as $item): ?>
                            <li><?= e($item) ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>

                <div class="job-block" data-reveal>
                    <h3>Technology stack</h3>
                    <ul class="tags">
                        <?php foreach ($techStack as $tech): ?>
                            <li><?= e($tech) ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </article>

            <aside class="job-aside">
                <div class="job-card" data-reveal>
                    <h3>Role overview</h3>
                    <dl class="meta">
                        <div><dt><svg class="icon"><use href="#i-pin"/></svg>Location</dt><dd>Bedford, Bedfordshire</dd></div>
                        <div><dt><svg class="icon"><use href="#i-wallet"/></svg>Salary</dt><dd>&pound;35,000 &ndash; &pound;40,000 per annum</dd></div>
                        <div><dt><svg class="icon"><use href="#i-briefcase"/></svg>Job type</dt><dd>Permanent &middot; 1 vacancy</dd></div>
                        <div><dt><svg class="icon"><use href="#i-calendar"/></svg>Date posted</dt><dd>14 Feb 2018</dd></div>
                        <div><dt><svg class="icon"><use href="#i-clock"/></svg>Closing date</dt><dd>31 Jul 2018</dd></div>
                    </dl>
                    <a href="<?= e($applyHref) ?>" class="btn btn-primary btn-block">Apply now <svg class="icon"><use href="#i-arrow"/></svg></a>
                    <p class="job-note">Send your CV and a short cover note to <a href="mailto:<?= e(VBC_EMAIL) ?>"><?= e(VBC_EMAIL) ?></a>.</p>
                </div>
            </aside>

        </div>
    </section>

</main>

<?php require __DIR__ . '/includes/footer.php'; ?>

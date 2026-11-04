<script lang="ts">
	import { blob, REPO } from '#lib/site.ts';
</script>

<svelte:head>
	<title>About — Electronic Patient Record</title>
	<meta name="description" content="How the Electronic Patient Record project works, and how to take part." />
</svelte:head>

<h1>About</h1>
<p class="lead">
	An independent open-source project to build a patient record that is safe by construction and honest
	about what it has not done.
</p>

<section>
	<h2>Not for clinical use</h2>
	<p>
		Do not use this software to care for anyone, and do not enter real patient data. It has no clinical
		safety sign-off, no named Clinical Safety Officer, no clinical review and no regulatory approval of
		any kind. The project makes no claim to meet any regulation or standard.
	</p>
</section>

<section>
	<h2>How the work is done</h2>
	<ul>
		<li><strong>Spec first.</strong> A behavioural change is one commit with a spec edit, a code edit and a test edit.</li>
		<li><strong>Say what was not done.</strong> Every changelog entry states what was not done or not verified.</li>
		<li><strong>Clinical risk goes in the hazard log.</strong> Only a Clinical Safety Officer may accept or close a hazard.</li>
		<li><strong>Worldwide and equitable.</strong> National rules live in packs, not in the core.</li>
	</ul>
	<p>Much of the work is done with AI coding agents; the <a href={blob('AGENTS.md')}>agent instructions</a> are public.</p>
</section>

<section>
	<h2>Take part</h2>
	<p>
		The project most needs people it does not have: clinicians, a Clinical Safety Officer, and people
		who can review the privacy and access work from experience. Start with the
		<a href={blob('spec/16-open-questions.md')}>open questions</a> or open an
		<a href={`${REPO}/issues`}>issue</a>.
	</p>
</section>

<section>
	<h2>Licence</h2>
	<p>
		Available under any one of MIT, Apache-2.0, BSD-3-Clause, GPL-2.0-only or GPL-3.0-only, at your
		choice. See the <a href={blob('LICENSE.md')}>licence</a>.
	</p>
</section>

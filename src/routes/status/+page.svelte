<script lang="ts">
	import { blob, snapshot } from '#lib/site.ts';
</script>

<svelte:head>
	<title>Status — Electronic Patient Record</title>
	<meta name="description" content="What is built and what is not, in the Electronic Patient Record project." />
</svelte:head>

<h1>Status</h1>
<p class="lead">What exists, what does not, and how far to trust the numbers.</p>
<p>
	A snapshot from {snapshot.date}, commit <code>{snapshot.commit}</code>. The live version is the generated
	<a href={blob('spec/14-implementation-status.md')}>implementation status</a>, and the
	<a href={blob('CHANGELOG.md')}>changelog</a> says what each change did not do or verify.
</p>

<section>
	<h2>Code exists for</h2>
	<ul>
		<li>Patient identity and explainable matching</li>
		<li>Consent and care relationships</li>
		<li>Allergies, observations and patient photos</li>
		<li>Closed-loop referrals, with worklists</li>
		<li>Amendment requests</li>
		<li>Merge and unmerge</li>
		<li>Break-the-glass emergency access</li>
		<li>An inbound HL7 ADT feed</li>
		<li>A hash-chained audit trail</li>
	</ul>
</section>

<section>
	<h2>Not built</h2>
	<ul>
		<li>Most of the clinical record: encounters, orders, results, notes, and prescribing</li>
		<li>Security labels on clinical records, so masking is not yet applied to clinical content</li>
		<li>A training environment; the <a href={blob('spec/training-overlay/index.md')}>training overlay</a> is a design only</li>
		<li>Backup and restore, so recovery targets are untested</li>
		<li>Bulk import and FHIR bulk export</li>
	</ul>
</section>

<section>
	<h2>Safety and review</h2>
	<ul>
		<li>No Clinical Safety Officer is named yet, so <strong>no hazard has been accepted or closed</strong>.</li>
		<li>The role and permission tables are a first draft and have had no clinical review.</li>
		<li>No clinician, lawyer or data protection officer has reviewed the specifications.</li>
		<li>Translations are machine-written until a speaker reviews them.</li>
		<li>The <a href={blob('governance/clinical-safety/hazard-log.csv')}>hazard log</a> is public.</li>
	</ul>
</section>

<section>
	<h2>Generated facts</h2>
	<p>Counted from the source tree. Test figures count tests written, not tests passing in a given run.</p>
	<table class="fact-table">
		<caption class="visually-hidden">Project facts on {snapshot.date}</caption>
		<tbody>
			{#each snapshot.facts as [name, value] (name)}
				<tr><th scope="row">{name}</th><td>{value}</td></tr>
			{/each}
			<tr><th scope="row">Tasks done</th><td>{snapshot.tasksDone}</td></tr>
			<tr><th scope="row">Tasks open</th><td>{snapshot.tasksOpen}</td></tr>
		</tbody>
	</table>
</section>

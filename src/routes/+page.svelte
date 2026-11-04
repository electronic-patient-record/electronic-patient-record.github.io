<script lang="ts">
	import { Card } from '@lilydesignsystem/svelte-headless';
	import { blob, REPO, snapshot, tree } from '#lib/site.ts';
</script>

<svelte:head>
	<title>Electronic Patient Record — open-source EPR software</title>
	<meta
		name="description"
		content="Open-source electronic patient record software in Rust and SvelteKit. A pre-release scaffold, not for clinical use."
	/>
</svelte:head>

<h1>An open-source electronic patient record</h1>
<p class="lead">
	A safe, append-only, audited longitudinal patient record, with FHIR R4 as both data model and API,
	and explainable patient identity matching. Everything is specified first, in the open.
</p>
<p>
	<strong>This is a pre-release scaffold.</strong> Parts of it run and are tested, but it is not a
	working clinical record. <a href="/status/">See exactly what is and is not built</a>, or
	<a href={REPO}>read the source</a>.
</p>

<section>
	<h2>Three projects, one record</h2>
	<div class="cards">
		<Card heading="Service" headingLevel={3} href={tree('electronic-patient-record-service-with-rust')}>
			<p>A loco.rs REST and FHIR API on PostgreSQL. The record and its audit trail live here.</p>
		</Card>
		<Card heading="Matcher" headingLevel={3} href={tree('electronic-patient-record-matcher-with-rust')}>
			<p>A pure Rust library for patient identity. It explains every match, and refuses when evidence is missing.</p>
		</Card>
		<Card heading="Clinician UI" headingLevel={3} href={tree('electronic-patient-record-ui-with-svelte')}>
			<p>SvelteKit and Svelte 5, with a backend-for-frontend so tokens stay on the server.</p>
		</Card>
	</div>
</section>

<section>
	<h2>The rules it holds to</h2>
	<ul>
		<li><strong>The clinical record is append-only.</strong> A change makes a new version; nothing is deleted.</li>
		<li><strong>Every access is audited,</strong> reads included, with who, what and why.</li>
		<li><strong>No disclosure without a lawful basis.</strong> Consent and access policy are checked in the service on every read.</li>
		<li><strong>Absent is not zero.</strong> Missing evidence is recorded as missing, with a reason, and never counts as agreement.</li>
		<li><strong>Safety-relevant behaviour goes in the hazard log</strong> before it ships.</li>
	</ul>
	<p>These are the project's <a href={blob('spec/index.md')}>shared invariants</a>. Each is a target the code is held to, not a claim of clinical safety.</p>
</section>

<section>
	<h2>Where it stands</h2>
	<p>
		As of {snapshot.date}: {snapshot.tasksDone} tasks done and {snapshot.tasksOpen} open.
		<a href="/status/">Full status</a>.
	</p>
</section>

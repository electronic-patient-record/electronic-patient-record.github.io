<script lang="ts">
	import { blob } from '#lib/site.ts';

	const groups = [
		{
			heading: 'Clinical safety',
			links: [
				['Measuring clinical safety', 'spec/clinical-safety/measurement.md'],
				['Manual steps: when a person is in the middle', 'spec/manual-steps/index.md'],
				['Data quality', 'spec/data-quality/index.md']
			]
		},
		{
			heading: 'Access and privacy',
			links: [
				['Roles and assignments', 'spec/access-control/roles-and-assignments.md'],
				['Protected information', 'spec/access-control/protected-information.md'],
				['Privacy-preserving analysis', 'spec/privacy-analytics.md']
			]
		},
		{
			heading: 'Care across settings',
			links: [
				['Care settings and specialty views', 'spec/care-settings.md'],
				['Pathway design', 'spec/pathway-design.md'],
				['Maternity', 'spec/maternity/index.md'],
				['Care homes', 'spec/care-homes/index.md'],
				['Virtual ward', 'spec/virtual-ward/index.md'],
				['Step-down facility', 'spec/step-down-facility/index.md'],
				['Mobile viewability', 'spec/mobile-viewability.md']
			]
		},
		{
			heading: 'Adopting it',
			links: [
				['Data exchange: getting data in and out', 'spec/data-exchange/index.md'],
				['Productivity measurement', 'spec/productivity-measurement/index.md'],
				['Training', 'spec/training/index.md'],
				['Training overlay', 'spec/training-overlay/index.md'],
				['System quality attributes', 'docs/index.md']
			]
		}
	];

	const vendors = [
		['Epic', 'spec/epic/index.md'],
		['Oracle Health (Cerner)', 'spec/oracle-cerner/index.md'],
		['MEDITECH', 'spec/meditech/index.md'],
		['Nervecentre', 'spec/nervecentre/index.md'],
		['Alcidion', 'spec/alcidion/index.md'],
		['System C', 'spec/system-c/index.md'],
		['TPP SystmOne', 'spec/tpp-system-one/index.md'],
		['EMIS', 'spec/emis/index.md'],
		['Access Rio', 'spec/access-rio/index.md'],
		['Altera', 'spec/altera/index.md'],
		['InterSystems TrakCare', 'spec/intersystems-trakcare/index.md'],
		['Dedalus', 'spec/dedalus/index.md']
	];
</script>

<svelte:head>
	<title>Research — Electronic Patient Record</title>
	<meta name="description" content="Desk research behind the Electronic Patient Record specification." />
</svelte:head>

<h1>Research</h1>
<p class="lead">The desk research behind the specification, with its sources and its gaps.</p>
<p>
	These are proposals and readings of public sources, not clinical or legal advice. Most sources were
	read as search results, and each page has a "Not verified" section. No clinician or lawyer has
	reviewed them. The ideas are ranked in the <a href={blob('plan.md')}>plan</a> and tracked in
	<a href={blob('tasks.md')}>tasks</a>.
</p>

{#each groups as group (group.heading)}
	<section>
		<h2>{group.heading}</h2>
		<ul>
			{#each group.links as [label, path] (path)}
				<li><a href={blob(path)}>{label}</a></li>
			{/each}
		</ul>
	</section>
{/each}

<section>
	<h2>Notes on other EPRs</h2>
	<p>
		Public-source notes on what can be learned from systems already in use. They are not product
		reviews and do not say any system is better or worse. This project is a scaffold; these are
		working products.
	</p>
	<ul>
		{#each vendors as [label, path] (path)}
			<li><a href={blob(path)}>{label}</a></li>
		{/each}
	</ul>
</section>

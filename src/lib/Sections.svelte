<script lang="ts">
	// Page bodies are Markdown from this repository, rendered at build time, so {@html} carries no outside input.
	// Each `## ` becomes a section, and a run of `### ` within one becomes a row of cards.
	let { html } = $props();

	const sections = $derived.by(() =>
		html
			.split(/(?=<h2[ >])/)
			.filter((s: string) => s.trim())
			.map((section: string) => {
				const parts = section.split(/(?=<h3[ >])/);
				return { lead: parts[0], cards: parts.slice(1) };
			})
	);
</script>

{#each sections as section, i (i)}
	<section class="prose">
		{@html section.lead}
		{#if section.cards.length > 0}
			<div class="cards">
				{#each section.cards as card, j (j)}
					<div class="card">{@html card}</div>
				{/each}
			</div>
		{/if}
	</section>
{/each}

<script lang="ts">
	import agfblLogo from '$lib/assets/agfbl-logo.png';
	import Typography from '$lib/components/custom-ui/typography';
	import { Logo } from '$lib/components/custom-ui/image-wrapper';
</script>

<div class="flex gap-2">
	<Logo src={agfblLogo} alt="AGFBL logo" />
	<div>
		<Typography fontWeight="bold">
			Faculty of Architecture, Civil Engineering and Geodesy, <span class="whitespace-nowrap"
				>University of Banja Luka</span
			>
		</Typography>
		<Typography>Master of Science in Civil Engineering</Typography>
		<Typography variant="textSmall" class="italic">Grade: 9.53</Typography>
	</div>
</div>

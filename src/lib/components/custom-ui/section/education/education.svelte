<script lang="ts">
	import Typography from '$lib/components/custom-ui/typography';
	import Image from '$lib/components/custom-ui/image';
	import agfblLogo from '$lib/assets/agfbl-logo.png?enhanced';
</script>

<div class="flex gap-2">
	<Image src={agfblLogo} alt="AGFBL logo" class="print:hidden" />
	<div>
		<Typography fontWeight="bold">
			Faculty of Architecture, Civil Engineering and Geodesy, <span class="whitespace-nowrap"
				>University of Banja Luka</span
			>
		</Typography>
		<Typography>Master of Science in Civil Engineering</Typography>
		<Typography variant="textSmall" class="italic">Average Grade: 9.53</Typography>
	</div>
</div>

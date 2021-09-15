<template>
  <BaseContentHeading>Aborting requests</BaseContentHeading>
  <BaseCard>
    <BaseCardTitle>API Layer - cancel request example with Axios</BaseCardTitle>
    <BaseCardContent>
      <p class="mb-4">
        Here you can test request cancellation. You can fetch a new quote, but
        if you turn on the Abort toggle, the request will be cancelled.
      </p>
      <BaseStack class="space-x-4 items-center" :class="[quote && 'mb-4']">
        <BaseLabel>Abort</BaseLabel>
        <BaseToggleSwitch v-model="abortRequests" />
      </BaseStack>
      <p v-if="quote">{{ quote }}</p>
    </BaseCardContent>
    <BaseCardActions>
      <BaseButton @click.prevent="onFetchQuoteHandler">Fetch quote</BaseButton>
    </BaseCardActions>
  </BaseCard>
</template>

<script>
import { fetchRandomQuote } from '@/api/quoteApi'
import { withAsync } from '@/helpers'
import { useToast } from 'vue-toastification'
const toast = useToast()

export default {
  data() {
    return {
      // Flag used to force aborting requests
      abortRequests: false,
      // Store a quite fetched from quotes API via fetchQuote method
      quote: '',
    }
  },
  methods: {
    /**
     * Initialise fetching a quote and
     * immediately abort the request if abortRequests is truthy
     */
    onFetchQuoteHandler() {
      this.fetchQuote()
      if (this.abortRequests) this.$options.abort?.()
    },
    async fetchQuote() {
      const { response, error } = await withAsync(fetchRandomQuote, {
        abort: abort => (this.$options.abort = abort),
      })

      // Remove all success/error toasts
      toast.clear()

      // fetchRandomQuote error
      if (error) {
        this.handleQuoteError(error)
        return
      }

      // fetchRandomQuote success
      this.quote = response.data.content
      toast.success('Request was successful!')
    },
    /**
     * Show a toast message on fetchQuote error
     */
    handleQuoteError(error) {
      if (error.aborted) {
        toast.error('Request aborted!')
      } else {
        toast.error('Oops, error!')
      }
    },
  },
}
</script>

<style module></style>

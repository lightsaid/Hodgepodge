import { mount } from '@vue/test-utils'
import Accordion from './Accordion.vue'
import { render, fireEvent } from '@testing-library/vue'

const accordionData = [
  {
    heading: 'One',
    content: 'Content one',
  },
  {
    heading: 'Two',
    content: 'Content Two',
  },
  {
    heading: 'Three',
    content: 'Content Three',
  },
]

/**
 * Vue Test Utils
 */

const mountAccordion = (args = {}) =>
  mount(Accordion, {
    props: {
      items: accordionData,
    },
    ...args,
  })

describe('Accordion.vue', () => {
  /**
   * This test is not needed, as the number of items is checked by
   * the test that matches accordionData content against rendered output
   */

  /*
  it('Renders correct number of items', () => {
    const wrapper = mountAccordion()
    expect(wrapper.findAll('[data-testid="accordion-item"]')).toHaveLength(
      accordionData.length
    )
  })
  */

  it('Each accordion item content is hidden at the start', () => {
    const wrapper = mountAccordion()
    wrapper
      .findAll('[data-testid="accordion-item-content"]')
      .forEach(contentItemWrapper => {
        expect(contentItemWrapper.isVisible()).toBe(false)
      })
  })

  /**
   * The 3 tests below are not needed as they test implementation details
   */

  /*
  
  it('onAccordionClick method is called on accordion header click', async () => {
    const wrapper = mountAccordion()
    const onAccordionClickSpy = spyOn(wrapper.vm, 'onAccordionClick')
    const header = wrapper.get('[data-testid="accordion-item-header"]')
    await header.trigger('click')
    expect(onAccordionClickSpy).toHaveBeenCalled()
  })

  it('Open method is called', async () => {
    const wrapper = mountAccordion()
    const openSpy = spyOn(wrapper.vm, 'open')
    const header = wrapper.get('[data-testid="accordion-item-header"]')
    await header.trigger('click')
    expect(openSpy).toHaveBeenCalled()
  })

  it('Close method is called', async () => {
    const wrapper = mountAccordion({
      data() {
        return {
          openIndexes: {
            0: true,
            1: false,
            2: false,
          },
        }
      },
    })
    const closeSpy = spyOn(wrapper.vm, 'close')
    const header = wrapper.get('[data-testid="accordion-item-header"]')
    await header.trigger('click')
    expect(closeSpy).toHaveBeenCalled()
  })

  */

  it('Accordion item content is toggled on header click', async () => {
    const wrapper = mountAccordion()
    const header = wrapper.get('[data-testid="accordion-item-header"]')
    const content = wrapper.get('[data-testid="accordion-item-content"]')
    await header.trigger('click')
    expect(content.isVisible()).toBe(true)
    await header.trigger('click')
    expect(content.isVisible()).toBe(false)
  })

  it('Accordion items have correct text', async () => {
    const wrapper = mountAccordion()

    // Get all accordion headers
    const headers = wrapper.findAll('[data-testid="accordion-item-header"]')
    // Get all accordion contents
    const contents = wrapper.findAll('[data-testid="accordion-item-content"]')

    // Match Text content
    accordionData.forEach((data, index) => {
      const headerText = headers[index].text()
      const contentText = contents[index].text()
      expect(headerText).toMatch(data.heading)
      expect(contentText).toMatch(data.content)
    })
  })
})

/**
 * Vue Testing Library
 */

const renderAccordion = (args = {}) =>
  render(Accordion, {
    props: {
      items: accordionData,
    },
    ...args,
  })

describe('Accordion.vue using Testing Library', () => {
  it('Accordion headers and content match and content is hidden', async () => {
    const { getByText } = renderAccordion()
    accordionData.forEach(data => {
      // Assert header text exists in DOM
      getByText(data.heading)
      // Assert content text exists in DOM
      const content = getByText(data.content)
      // Confirm it's not visible
      expect(content).not.toBeVisible()
    })
  })

  it('Accordion item content is toggled on header click', async () => {
    const { getByText } = renderAccordion()
    // Get reference to DOM elements
    const header = getByText(accordionData[0].heading)
    const content = getByText(accordionData[0].content)
    // Open accordion item
    await fireEvent.click(header)
    expect(content).toBeVisible()
    // Close accordion item
    await fireEvent.click(header)
    expect(content).not.toBeVisible()
  })
})

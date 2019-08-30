import * as React from 'react';
import { CubesIcon } from '@patternfly/react-icons';
import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';
import { Accordion, AccordionItem, AccordionContent, AccordionToggle } from '@patternfly/react-core';
import {
  PageSection,
  Title,
  Button,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions
} from '@patternfly/react-core';


class FixedAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: ['ex2-toggle4']
    };
  }

  render() {
    const toggle = id => {
      const expanded = this.state.expanded;
      const index = expanded.indexOf(id);
      const newExpanded =
        index >= 0 ? [...expanded.slice(0, index), ...expanded.slice(index + 1, expanded.length)] : [...expanded, id];
      this.setState(() => ({ expanded: newExpanded }));
    };

    return (
      <Accordion asDefinitionList={false}>
        <AccordionItem>
          <AccordionToggle
            onClick={() => toggle('ex2-toggle1')}
            isExpanded={this.state.expanded.includes('ex2-toggle1')}
            id="ex2-toggle1"
          >
            Item One
          </AccordionToggle>
          <AccordionContent
            id="ex2-expand1"
            isHidden={!this.state.expanded.includes('ex2-toggle1')}
            isFixed
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionToggle
            onClick={() => toggle('ex2-toggle2')}
            isExpanded={this.state.expanded.includes('ex2-toggle2')}
            id="ex2-toggle2"
          >
            Item Two
          </AccordionToggle>
          <AccordionContent
            id="ex2-expand2"
            isHidden={!this.state.expanded.includes('ex2-toggle2')}
            isFixed
          >
            <p>
              Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
              ultrices, faucibus erat id, maximus nunc.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionToggle
            onClick={() => toggle('ex2-toggle3')}
            isExpanded={this.state.expanded.includes('ex2-toggle3')}
            id="ex2-toggle3"
          >
            Item Three
          </AccordionToggle>
          <AccordionContent
            id="ex2-expand3"
            isHidden={!this.state.expanded.includes('ex2-toggle3')}
            isFixed
          >
            <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionToggle
            onClick={() => toggle('ex2-toggle4')}
            isExpanded={this.state.expanded.includes('ex2-toggle4')}
            id="ex2-toggle4"
          >
            Item Four
          </AccordionToggle>
          <AccordionContent
            id="ex2-expand4"
            isHidden={!this.state.expanded.includes('ex2-toggle4')}
            isFixed
          >
            <p>
              Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
              sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper
              eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris,
              pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus.
              Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionToggle
            onClick={() => toggle('ex2-toggle5')}
            isExpanded={this.state.expanded.includes('ex2-toggle5')}
            id="ex2-toggle5"
          >
            Item Five
          </AccordionToggle>
          <AccordionContent
            id="ex2-expand5"
            isHidden={!this.state.expanded.includes('ex2-toggle5')}
            isFixed
          >
            <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }
}

const Support: React.FunctionComponent<any> = (props) => {
  return (
    <PageSection>
      <EmptyState variant={EmptyStateVariant.full}>
        <EmptyStateIcon icon={CubesIcon} />
        <Title headingLevel="h5" size="lg">
          Empty State (Stub Support Module)
        </Title>
        <EmptyStateBody>
          This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible
          enough to meet a variety of needs.
        </EmptyStateBody>
        <Button variant="primary">Primary Action</Button>
        <EmptyStateSecondaryActions>
          <Button variant="link">Multiple</Button>
          <Button variant="link">Action Buttons</Button>
          <Button variant="link">Can</Button>
          <Button variant="link">Go here</Button>
          <Button variant="link">In the secondary</Button>
          <Button variant="link">Action area</Button>
        </EmptyStateSecondaryActions>
      </EmptyState>
      <FixedAccordion>what should go here??</FixedAccordion>
      <hr />
      <Card isHoverable>
        <CardHeader><center><h1>CP-12: Safe Mode</h1></center></CardHeader>
        <CardBody>“The information system, when [Assignment: organization-defined conditions] are detected, enters a safe mode of operation with [Assignment: organization-defined restrictions of safe mode of operation].”</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>


      
    </PageSection>
  );
}

export { Support };

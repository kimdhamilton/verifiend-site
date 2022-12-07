import React from 'react';
import "semantic-ui-css/semantic.min.css";
import {
    Container,
    Grid,
    Header,
    Label,
    Segment,
} from 'semantic-ui-react';
import { AccountList } from './components/AccountList';
import { TimeSeriesChart } from './components/TimeSeriesChart';
import TopMenu from './components/TopMenu';

const DAILY_ENDPOINT = 'https://j7wyyzwjef.execute-api.us-east-1.amazonaws.com/stage/counts/';
const HOURLY_ENDPOINT = 'https://j7wyyzwjef.execute-api.us-east-1.amazonaws.com/stage/hourly';
const DIFFS_ENDPPOINT = 'https://j7wyyzwjef.execute-api.us-east-1.amazonaws.com/stage/diffs';

export const App = () => (
    <div>
        <TopMenu />
        <Container style={{ marginTop: '7em' }}>
            <Header as='h1'>Twitter Verified Account Activity Since Nov 7</Header>
            <Container textAlign='left'>
                <Grid divided stackable>
                    <Grid.Column width={12}>
                        <Header as='h4' content='Daily Count of Verified Accounts, Since Nov 7' />
                        <TimeSeriesChart endpoint={DAILY_ENDPOINT} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Header as='h4' content='Accounts that are no longer verified, random sample' />
                        <AccountList endpoint={DIFFS_ENDPPOINT} type='deleted' />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Header as='h4' content='Hourly Count of Verified Accounts, Last 3 Days' />
                        <TimeSeriesChart endpoint={HOURLY_ENDPOINT} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Header as='h4' content='Accounts that are newly verified, random sample' />
                        <AccountList endpoint={DIFFS_ENDPPOINT} type='added' />
                    </Grid.Column>

                </Grid>
            </Container>
        </Container>

        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
            <Container textAlign='center'>
                <Label inverted as='a' size='small' href='mailto:contact@verifiend.xyz'>Contact</Label>
            </Container>
        </Segment>
    </div>
)

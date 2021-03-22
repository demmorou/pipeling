import { ScheduledTask, schedule } from 'node-cron';
import { container } from 'tsyringe';

import { CreateOrderService } from '~modules/bling/services/CreateOrderService';
import { SearchDealsService } from '~modules/pipedrive/services/SearchDealsService';

class GetDealsAndCreateOrders {
  public async run(): Promise<void> {
    await this.job();
  }

  private async job(): Promise<ScheduledTask> {
    return schedule('40 06 23 * * *', async () => {
      console.log('stage 1');

      const getDeals = container.resolve(SearchDealsService);
      const deals = await getDeals.execute({ start: 0, status: 'won' });
      console.log('stage 2');

      const createOrder = container.resolve(CreateOrderService);
      await createOrder.execute(deals.data);
      console.log('stage 3');
    });
  }
}

export default new GetDealsAndCreateOrders().run();

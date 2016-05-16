# == Schema Information
#
# Table name: todos
#
#  id         :integer          not null, primary key
#  note       :text             not null
#  completed  :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Todo, type: :model do
  let(:todo) { build(:todo) }

  it 'has a valid factory' do
    expect(todo).to be_valid
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:note) }

    it 'does not allow buzzwords' do
      todo = build(:todo, note: Todo::BUZZWORDS.sample)
      expect(todo).not_to be_valid
      expect(todo.errors.messages[:note])
        .to include('contains buzzwords! Reconsider your life choices.')
    end

    it 'does not todos containing immutable keywords to be undone' do
      todo = create(:todo, note: Todo::IMMUTABLES.sample, completed: true)
      todo.completed = false
      expect(todo).not_to be_valid
      expect(todo.errors.messages[:todo])
        .to include('is immutable and cannot be undone!')
    end
  end
end

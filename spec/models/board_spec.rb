# == Schema Information
#
# Table name: boards
#
#  id            :integer          not null, primary key
#  name          :string
#  description   :text
#  default_state :json
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'rails_helper'

RSpec.describe Board, type: :model do
  it "has a valid factory" do
    expect(build(:board)).to be_valid
  end

  describe  'validation' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:default_state) }
  end

  describe 'association' do
    it { should have_many(:board_panels).dependent(:destroy) }
    it { should have_many(:panels) }
  end
end
